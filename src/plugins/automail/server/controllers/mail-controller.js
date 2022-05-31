'use strict';

const { getPluginService } = require('../utils/getPluginService');

module.exports = {
  async find(ctx) {
	  const emails = await getPluginService(strapi, 'mailService').find(ctx.query);
	  ctx.send({ data: { emails } });
  },
};
