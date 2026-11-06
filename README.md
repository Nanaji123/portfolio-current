# Nanaji Gundapu: portfolio

Source for [nanajigundapu.vercel.app](https://nanajigundapu.vercel.app), my personal site. I'm a Senior Mobile Engineer working in React Native, Kotlin, Swift, Node.js and PostgreSQL.

## Stack

- Next.js 16 (App Router) with statically rendered pages
- TypeScript
- Tailwind CSS 4
- Deployed on Vercel

## How it's built

- **Content lives in one file.** Projects, experience and skills are all in [`lib/data.ts`](lib/data.ts), so a résumé update only touches that file.
- **Very little client JavaScript.** Most components render on the server. The navbar and theme toggle are the main exceptions.
- **The phone previews are code, not video.** [`chronoscape-preview.tsx`](components/chronoscape-preview.tsx) and [`live-call-preview.tsx`](components/live-call-preview.tsx) are SVG and CSS. They're sized in relative units, so they stay sharp at any width, and they respect reduced-motion settings.
- **The share image is generated.** [`opengraph-image.tsx`](app/opengraph-image.tsx) builds it at build time.

## Running it locally

```bash
pnpm install
pnpm dev
```

Then open [localhost:3000](http://localhost:3000). Run `pnpm typecheck` and `pnpm lint` before pushing.

## Contact

[gundapunanaji123@gmail.com](mailto:gundapunanaji123@gmail.com) · [LinkedIn](https://www.linkedin.com/in/nanaji-gundapu-ab5935264/)
