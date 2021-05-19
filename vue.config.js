const path = require('path');

module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/irregular-verbs/'
    : '/',

  transpileDependencies: [
    'vuetify',
  ],

  configureWebpack: {
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
      },
    },
  },
};
