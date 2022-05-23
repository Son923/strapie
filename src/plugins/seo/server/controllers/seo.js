'use strict';

module.exports = {
  findContentTypes(ctx) {
    ctx.body = strapi.plugin('seo').service('seo').getContentTypes();
  },
  
  hello(ctx) {
    ctx.body = "Hello"
  }
}


