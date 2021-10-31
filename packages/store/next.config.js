module.exports = {
  async rewrites() {
    return [
      { source: '/:path*', destination: '/:path*' },
      { source: '/login', destination: 'http://localhost:4000/login' },
      { source: '/login/:path*', destination: 'http://localhost:4000/login/:path*' },
    ];
  },
  reactStrictMode: true,
  images: {
    domains: ['d1ralsognjng37.cloudfront.net'],
  },
};
