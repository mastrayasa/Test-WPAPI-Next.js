// next.config.js
module.exports = {
    images: {
      domains: ['via.placeholder.com'],
    },
    env: {
        NEXT_PUBLIC_WP_ENDPOINT: process.env.NEXT_PUBLIC_WP_ENDPOINT,
      }
  }