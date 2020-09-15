const withFonts = require('nextjs-fonts');


module.exports = withFonts({
    env: {
        PRISMIC_API_ENDPOINT: process.env.PRISMIC_API_ENDPOINT,
        SENDGRID_API_KEY: process.env.SENDGRID_API_KEY
    },
    webpack(config) {
        config.module.rules.push({
          test: /\.svg$/,
          issuer: {
            test: /\.(js|ts)x?$/,
          },
          use: ['@svgr/webpack'],
        });
    
        return config;
      },
});