module.exports = {
  async rewrites() {
    return [
      { source: '/:path*', destination: '/:path*' },
      { source: '/login', destination: `${process.env.URL_LOGIN_PAGE}/login` },
      { source: '/login/:path*', destination: `${process.env.URL_LOGIN_PAGE}/login/:path*` },
    ];
  },
  reactStrictMode: true,
  images: {
    domains: ['d1ralsognjng37.cloudfront.net'],
  },
};
