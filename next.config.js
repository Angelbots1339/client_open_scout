/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = nextConfig;

module.exports = {
  async redirects() {
    return [
      {
        source: '/dashboard/scouts',
        destination: '/dashboard/scouts/active',
        permanent: true,
      },
      {
        source: '/dashboard/scouts/list/:scout',
        destination: '/dashboard/scouts/list/:scout/general',
        permanent: true,
      },
      {
        source: '/dashboard/scouts/list',
        destination: '/dashboard/scouts',
        permanent: true,
      },
    ]
  },
}
