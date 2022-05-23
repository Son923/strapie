'use strict';

module.exports = [
    {
      method: "GET",
      path: "/content-types",
      handler: "seo.findContentTypes",
      config: {
        auth: false,
        policies: [],
      },
    },
    {
      method: "GET",
      path: "/hello",
      handler: "seo.hello",
      config: {
        auth: false,
        policies: [],
      },
    }
  ];