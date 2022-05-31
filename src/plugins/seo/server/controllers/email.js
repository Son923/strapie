'use strict';

module.exports = {
  findContentTypes(ctx) {
    ctx.body = strapi.plugin('seo').service('seo').getContentTypes();
  },
  
  hello(ctx) {
    ctx.body = "Hello"
  },

  async find(ctx) {
    try {
      return await strapi.plugin("seo").service("seo").find(ctx.query);
    } catch (err) {
      ctx.throw(500, err);
    }
  },
}


