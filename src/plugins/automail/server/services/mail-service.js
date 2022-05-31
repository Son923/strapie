'use strict';

const { pluginId } = require('../utils/pluginId');

const uid = `plugin::${pluginId}.mail`;

module.exports = ({ strapi }) => ({
   /**
	 * Returns the currently stored build logs
	 *
	 * @return {Promise<array>} logs
	 */
	find(options = {}) {
		return strapi.entityService.findMany(uid, options);
	},    
});

