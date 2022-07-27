import { prefixPluginTranslations, useCMEditViewDataManager } from '@strapi/helper-plugin';
import pluginPkg from '../../package.json';
import pluginId from './pluginId';
import Initializer from './components/Initializer';
import PluginIcon from './components/PluginIcon';
import { Avatar } from '@strapi/design-system/Avatar';
import React from 'react';
import { SearchBox } from './components/SearchBox';

const name = pluginPkg.strapi.name;

export default {
  register(app) {
    app.registerPlugin({
      id: pluginId,
      initializer: Initializer,
      isReady: false,
      name,
    });
  },

  bootstrap(app) {
    // Inject SearchBox in EditView
    app.injectContentManagerComponent('editView', 'informations', {
			name: name,
			Component: SearchBox,
		});

    // Inject column Avatar
    app.registerHook('Admin/CM/pages/ListView/inject-column-in-table', ({ displayedHeaders, layout }) => {
      if (layout.contentType.uid !== "api::channel.channel") {
        return {
          displayedHeaders,
          layout,
        };
      }

      return {
        layout,
        displayedHeaders: [
          ...displayedHeaders,
          {
            key: '__avatarUrl_key__', // Needed for the table
            fieldSchema: { type: 'string' }, // Schema of the attribute
            metadatas: {
              label: 'Avatar', // Label of the header,
              sortable: true // Define if the column is sortable
            }, // Metadatas for the label
            // Name of the key in the data we will display
            name: 'avatarUrl',
            // Custom renderer: props => Object.keys(props).map(key => <p key={key}>key</p>)
            cellFormatter: (data) => {
              return (
                <Avatar src={data['avatarUrl']} alt="" preview />
              );
            },
          },
        ]
      };
    });
    
    // Inject column Created At 
    app.registerHook('Admin/CM/pages/ListView/inject-column-in-table', ({ displayedHeaders, layout }) => {
      if (layout.contentType.uid !== "api::channel.channel") {
        return {
          displayedHeaders,
          layout,
        };
      }

			return {
        layout,
        displayedHeaders: [
          ...displayedHeaders,
          {
            key: '__created_by_id_key__', // Needed for the table
            fieldSchema: { type: 'string' }, // Schema of the attribute
            metadatas: {
              label: 'Created By', // Label of the header,
              sortable: true // Define if the column is sortable
            }, // Metadatas for the label
            // Name of the key in the data we will display
            name: 'created_by_id',
            // Custom renderer: props => Object.keys(props).map(key => <p key={key}>key</p>)
            cellFormatter: (data) => {
              return (
                <div>
                  {data["createdBy"]["firstname"]}{" "}
                  {data["createdBy"]["lastname"]}{" "}
                </div>
              );
            },
          },
			  ]
      };
    });

  },
  async registerTrads({ locales }) {
    const importedTrads = await Promise.all(
      locales.map(locale => {
        return import(`./translations/${locale}.json`)
          .then(({ default: data }) => {  
            return {
              data: prefixPluginTranslations(data, pluginId),
              locale,
            };
          })
          .catch(() => {
            return {
              data: {},
              locale,
            };
          });
      })
    );

    return Promise.resolve(importedTrads);
  },
};
