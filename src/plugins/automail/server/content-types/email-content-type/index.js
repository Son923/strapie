'use strict';

module.exports = {
    "kind": "collectionType",
    "collectionName": "emails",
    "info": {
      "singularName": "email",
      "pluralName": "emails",
      "displayName": "Email"
    },
    "options": {
      "draftAndPublish": true
    },
    "pluginOptions": {
      "content-manager": {
        visible: true
      },
      "content-type-builder": {
        visible: true
      }
    },
    "attributes": {
      "subject": {
        "type": "string"
      }
    }
};