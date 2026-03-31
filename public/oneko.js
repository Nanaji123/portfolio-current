// oneko.js: https://github.com/adryd325/oneko.js
(function oneko() {
  const isReducedMotion =
    window.matchMedia(`(prefers-reduced-motion: reduce)`) === true ||
    window.matchMedia(`(prefers-reduced-motion: reduce)`).matches === true;

  if (isReducedMotion) return;

  const spriteSets = {
    idle: [[-3, -3]],
    alert: [[-7, -3]],
    scratchSelf: [[-5, 0], [-6, 0], [-7, 0]],
    scratchWallN: [[0, 0], [0, -1]],
    scratchWallS: [[-7, -1], [-6, -2]],
    scratchWallE: [[-2, -2], [-2, -3]],
    scratchWallW: [[-4, 0], [-4, -1]],
    tired: [[-3, -2]],
    sleeping: [[-2, 0], [-2, -1]],
    N: [[-1, -2], [-1, -3]],
    NE: [[0, -2], [0, -3]],
    E: [[-3, 0], [-3, -1]],
    SE: [[-5, -1], [-5, -2]],
    S: [[-6, -3], [-7, -2]],
    SW: [[-5, -3], [-6, -1]],
    W: [[-4, -2], [-4, -3]],
    NW: [[-1, 0], [-1, -1]],
  };

  let mousePosX = 0;
  let mousePosY = 0;
  let nekoFile = '/oneko.gif';

  const curScript = document.currentScript;
  if (curScript && curScript.dataset.cat) {
    nekoFile = curScript.dataset.cat;
  }

  document.addEventListener('mousemove', (event) => {
    mousePosX = event.clientX;
    mousePosY = event.clientY;
  });

  class Neko {
    constructor(isClone = false) {
      this.el = document.createElement('div');
      this.posX = window.innerWidth / 2;
      this.posY = window.innerHeight / 2;
      this.isClone = isClone;
      this.frameCount = 0;
      this.idleTime = 0;
      this.idleAnimation = null;
      this.idleAnimationFrame = 0;
      this.speed = 10;
      this.targetX = mousePosX;
      this.targetY = mousePosY;
      this.opacity = 1;
      this.lifeTime = isClone ? 5000 + Math.random() * 2000 : Infinity;
      this.startTime = Date.now();

      this.dx = 0;
      this.dy = 0;
      this.direction = 'E';
      this.clickMeEl = null;

      this.init();
    }

    init() {
      this.el.className = 'oneko';
      if (this.isClone) this.el.classList.add('clone');
      this.el.style.width = '32px';
      this.el.style.height = '32px';
      this.el.style.position = 'fixed';
      this.el.style.pointerEvents = this.isClone ? 'none' : 'auto';
      this.el.style.imageRendering = 'pixelated';
      this.el.style.backgroundImage = `url(${nekoFile})`;
      this.el.style.zIndex = '2147483647';
      this.el.style.cursor = 'pointer';

      if (!this.isClone) {
        this.el.addEventListener('click', () => {
          this.shadowCloneJutsu();
        });
      }

      document.body.appendChild(this.el);
    }

    setSprite(name, frame) {
      const sprite = spriteSets[name][frame % spriteSets[name].length];
      this.el.style.backgroundPosition = `${sprite[0] * 32}px ${sprite[1] * 32}px`;
    }

    resetIdleAnimation() {
      this.idleAnimation = null;
      this.idleAnimationFrame = 0;
    }

    idle() {
      this.idleTime += 1;

      // Show "click me" prompt when idle
      if (!this.isClone && this.idleTime > 15) {
        this.toggleClickMePrompt(true);
      }

      if (this.idleTime > 10 && Math.floor(Math.random() * 200) == 0 && this.idleAnimation == null) {
        let avalibleIdleAnimations = ['sleeping', 'scratchSelf'];
        if (this.posX < 32) avalibleIdleAnimations.push('scratchWallW');
        if (this.posY < 32) avalibleIdleAnimations.push('scratchWallN');
        if (this.posX > window.innerWidth - 32) avalibleIdleAnimations.push('scratchWallE');
        if (this.posY > window.innerHeight - 32) avalibleIdleAnimations.push('scratchWallS');
        this.idleAnimation = avalibleIdleAnimations[Math.floor(Math.random() * avalibleIdleAnimations.length)];
      }

      switch (this.idleAnimation) {
        case 'sleeping':
          if (this.idleAnimationFrame < 8) {
            this.setSprite('tired', 0);
          } else {
            this.setSprite('sleeping', Math.floor(this.idleAnimationFrame / 4));
            if (this.idleAnimationFrame > 192) this.resetIdleAnimation();
          }
          break;
        case 'scratchWallN':
        case 'scratchWallS':
        case 'scratchWallE':
        case 'scratchWallW':
        case 'scratchSelf':
          this.setSprite(this.idleAnimation, this.idleAnimationFrame);
          if (this.idleAnimationFrame > 9) this.resetIdleAnimation();
          break;
        default:
          this.setSprite('idle', 0);
          return;
      }
      this.idleAnimationFrame += 1;
    }

    update() {
      this.frameCount += 1;

      if (this.isClone) {
        const age = Date.now() - this.startTime;
        if (age > this.lifeTime) {
          this.destroy();
          return;
        }
        if (age > this.lifeTime - 1000) {
          this.opacity = (this.lifeTime - age) / 1000;
          this.el.style.opacity = this.opacity;
        }

        this.posX += this.dx;
        this.posY += this.dy;
        this.setSprite(this.direction, this.frameCount);
      } else {
        this.targetX = mousePosX;
        this.targetY = mousePosY;

        const diffX = this.posX - this.targetX;
        const diffY = this.posY - this.targetY;
        const distance = Math.sqrt(diffX ** 2 + diffY ** 2);

        if (distance < this.speed || distance < 48) {
          this.idle();
          // Update prompt position if it exists
          if (this.clickMeEl) {
            this.clickMeEl.style.left = `${this.posX}px`;
            this.clickMeEl.style.top = `${this.posY - 35}px`;
          }
          return;
        }

        this.idleAnimation = null;
        this.idleAnimationFrame = 0;
        this.toggleClickMePrompt(false);

        if (this.idleTime > 1) {
          this.setSprite('alert', 0);
          this.idleTime = Math.min(this.idleTime, 7);
          this.idleTime -= 1;
          return;
        }

        let dir = diffY / distance > 0.5 ? 'N' : '';
        dir += diffY / distance < -0.5 ? 'S' : '';
        dir += diffX / distance > 0.5 ? 'W' : '';
        dir += diffX / distance < -0.5 ? 'E' : '';
        this.setSprite(dir, this.frameCount);

        this.posX -= (diffX / distance) * this.speed;
        this.posY -= (diffY / distance) * this.speed;
      }

      if (this.posX < 16 || this.posX > window.innerWidth - 16 || this.posY < 16 || this.posY > window.innerHeight - 16) {
        if (this.isClone) {
          this.destroy();
          return;
        }
      }

      this.posX = Math.min(Math.max(16, this.posX), window.innerWidth - 16);
      this.posY = Math.min(Math.max(16, this.posY), window.innerHeight - 16);

      this.el.style.left = `${this.posX - 16}px`;
      this.el.style.top = `${this.posY - 16}px`;
    }

    destroy() {
      this.el.remove();
      this.toggleClickMePrompt(false);
      const index = nekos.indexOf(this);
      if (index > -1) nekos.splice(index, 1);
    }

    toggleClickMePrompt(show) {
      if (show && !this.clickMeEl) {
        this.clickMeEl = document.createElement('div');
        this.clickMeEl.innerText = "click me";
        this.clickMeEl.style.position = 'fixed';
        this.clickMeEl.style.left = `${this.posX}px`;
        this.clickMeEl.style.top = `${this.posY - 35}px`;
        this.clickMeEl.style.color = 'black';
        this.clickMeEl.style.fontSize = '12px';
        this.clickMeEl.style.fontWeight = 'bold';
        this.clickMeEl.style.fontFamily = 'monospace';
        this.clickMeEl.style.zIndex = '2147483647';
        this.clickMeEl.style.pointerEvents = 'none';
        this.clickMeEl.style.textAlign = 'center';
        this.clickMeEl.style.transform = 'translateX(-50%)';
        this.clickMeEl.style.textShadow = '1px 1px 0px white, -1px -1px 0px white, 1px -1px 0px white, -1px 1px 0px white';
        this.clickMeEl.style.animation = 'click-pulse 1s infinite alternate';

        // Add pulse animation style if not exists
        if (!document.getElementById('oneko-style')) {
          const style = document.createElement('style');
          style.id = 'oneko-style';
          style.innerText = `
            @keyframes click-pulse {
              from { transform: translateX(-50%) translateY(0); opacity: 0.8; }
              to { transform: translateX(-50%) translateY(-5px); opacity: 1; }
            }
          `;
          document.head.appendChild(style);
        }

        document.body.appendChild(this.clickMeEl);
      } else if (!show && this.clickMeEl) {
        this.clickMeEl.remove();
        this.clickMeEl = null;
      }
    }

    shadowCloneJutsu() {
      this.toggleClickMePrompt(false);
      this.showBubble("Shadowclone Jutsu!");

      for (let i = 0; i < 15; i++) {
        const angle = (Math.PI * 2 * i) / 15;
        const clone = new Neko(true);
        clone.posX = this.posX;
        clone.posY = this.posY;

        const speedMultiplier = 6 + Math.random() * 6;
        clone.dx = Math.cos(angle) * speedMultiplier;
        clone.dy = Math.sin(angle) * speedMultiplier;

        const dist = Math.sqrt(clone.dx ** 2 + clone.dy ** 2);
        let dir = clone.dy / dist < -0.5 ? 'N' : '';
        dir += clone.dy / dist > 0.5 ? 'S' : '';
        dir += clone.dx / dist < -0.5 ? 'W' : '';
        dir += clone.dx / dist > 0.5 ? 'E' : '';
        clone.direction = dir || 'E';

        nekos.push(clone);
      }
    }

    showBubble(text) {
      const bubble = document.createElement('div');
      bubble.innerText = text;
      bubble.style.position = 'fixed';
      bubble.style.left = `${this.posX}px`;
      bubble.style.top = `${this.posY - 40}px`;
      bubble.style.color = 'black';
      bubble.style.fontSize = '14px';
      bubble.style.fontWeight = '900';
      bubble.style.zIndex = '2147483647';
      bubble.style.pointerEvents = 'none';
      bubble.style.textShadow = '0px 0px 4px rgba(255,255,255,0.8), 1px 1px 0px white';
      bubble.style.fontFamily = 'monospace';
      bubble.style.transform = 'translateX(-50%)';
      bubble.style.transition = 'all 0.8s ease-out';

      document.body.appendChild(bubble);

      setTimeout(() => {
        bubble.style.transform = 'translateX(-50%) translateY(-30px) scale(1.2)';
        bubble.style.opacity = '0';
      }, 1000);

      setTimeout(() => {
        bubble.remove();
      }, 1800);
    }
  }

  const nekos = [];
  const primaryNeko = new Neko();
  nekos.push(primaryNeko);

  let lastFrameTimestamp;
  function onAnimationFrame(timestamp) {
    if (!lastFrameTimestamp) lastFrameTimestamp = timestamp;
    if (timestamp - lastFrameTimestamp > 100) {
      lastFrameTimestamp = timestamp;
      [...nekos].forEach(n => n.update());
    }
    window.requestAnimationFrame(onAnimationFrame);
  }

  window.requestAnimationFrame(onAnimationFrame);
})();
