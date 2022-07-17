'use strict';

module.exports = {
  index(ctx) {
    ctx.body = strapi
      .plugin('UpdateAllChannels')
      .service('myService')
      .getWelcomeMessage();
  },
};
