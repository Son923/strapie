'use strict';

module.exports = {
  index(ctx) {
    ctx.body = strapi
      .plugin('automail')
      .service('myService')
      .getWelcomeMessage();
  },
};
