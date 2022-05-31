'use strict';

module.exports = [
    {
      method: "GET",
      path: "/content-types",
      handler: "email.findContentTypes",
      config: {
        auth: false,
        policies: [],
      },
    },
    {
      method: "GET",
      path: "/find",
      handler: "email.find",
      config: {
        auth: false,
        policies: [],
      },
    },
    {
      method: "GET",
      path: "/hello",
      handler: "email.hello",
      config: {
        auth: false,
        policies: [],
      },
    }
  ];