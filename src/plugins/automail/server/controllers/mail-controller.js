'use strict';

const { getPluginService } = require('../utils/getPluginService');

module.exports = {
  async find(ctx) {
	  const mails = await getPluginService(strapi, 'mailService').find(ctx.query);
	  ctx.send(mails);
  },
};
