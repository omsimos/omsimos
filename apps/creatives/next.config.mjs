/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ["@omsimos/ui, @omsimos/configs"],

  async redirects() {
    return [
      {
        source: "/discord",
        destination: "https://discord.gg/8ve2mjJrs7",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
