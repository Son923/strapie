'use strict';

module.exports = {
  index(ctx) {
    ctx.body = strapi
      .plugin('youtube-search')
      .service('myService')
      .getWelcomeMessage();
  },
};
