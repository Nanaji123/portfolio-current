/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // 90 keeps the small text in app screenshots crisp
    qualities: [75, 90],
  },
  async redirects() {
    // /blogs was removed; old links and search results go to the homepage
    return [{ source: "/blogs", destination: "/", permanent: true }]
  },
}

export default nextConfig
