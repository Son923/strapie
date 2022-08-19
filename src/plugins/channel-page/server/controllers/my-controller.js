'use strict';

module.exports = {
  index(ctx) {
    ctx.body = strapi
      .plugin('channel-page')
      .service('myService')
      .getWelcomeMessage();
  },
};
