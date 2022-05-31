
'use strict';

module.exports = {
	kind: 'collectionType',
	collectionName: 'emails',
	info: {
		singularName: 'email',
		pluralName: 'emails',
		displayName: 'Emails',
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
		title: {
			type: 'string',
		},
	},
};

