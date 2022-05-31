'use strict';

module.exports = [
	{
		method: 'GET',
		path: '/find',
		handler: 'mailController.find',
        config: {
            auth: false,
            policies: [],
        },

	},
];