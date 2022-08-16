import { prefixPluginTranslations, auth } from '@strapi/helper-plugin';
import pluginPkg from '../../package.json';
import pluginId from './pluginId';
import Initializer from './components/Initializer';
import PluginIcon from './components/PluginIcon';
import { Update } from './components/Injected/update';
import { Avatar } from '@strapi/design-system/Avatar';
import React from 'react';

const name = pluginPkg.strapi.name;

const Settings = async () => {
  const component = await import(
    /* webpackChunkName: "users-providers-settings-page" */ './pages/Settings'
  );

  return component;
};

export default {
  register(app) {
      
      app.createSettingSection(
        { id: pluginId, intlLabel: { id: `${pluginId}.plugin.name`, defaultMessage: "Update Channel" } }, // Section to create
        [
          // links
          {
            intlLabel: { id: `${pluginId}.plugin.name`, defaultMessage: "Channels" },
            id: 'updatechannel-Configuration',
          to: `/settings/${pluginId}`,
          Component: Settings,
          // permissions: Object[''],
          },
        ]
      );

      app.registerPlugin({
        id: pluginId,
        initializer: Initializer,
        isReady: false,
        name,
      });
      
    },
    
    bootstrap(app) {
    app.injectContentManagerComponent('listView', 'actions', {
      name: `${pluginId}-update`,
      Component: Update,
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
