'use strict';

module.exports = {
	kind: 'collectionType',
	collectionName: 'mails',
	info: {
		singularName: 'mail',
		pluralName: 'mails',
		displayName: 'Mail',
	},
	pluginOptions: {
		'content-manager': {
			visible: true,
		},
		'content-type-builder': {
			visible: true,
		},
	},
	options: {
		draftAndPublish: true,
		comment: '',
	},
	attributes: {
		subject: {
			type: 'string',
		},
	},
};