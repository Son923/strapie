import Logo from './extensions/unicorn.png';
import favicon from './extensions/favicon.ico';

export default {
    config: {
      locales: [
        // 'ar',
        // 'fr',
        // 'cs',
        // 'de',
        // 'dk',
        // 'es',
        // 'he',
        // 'id',
        // 'it',
        // 'ja',
        // 'ko',
        // 'ms',
        // 'nl',
        // 'no',
        // 'pl',
        // 'pt-BR',
        // 'pt',
        // 'ru',
        // 'sk',
        // 'sv',
        // 'th',
        // 'tr',
        // 'uk',
        'vi',
        // 'zh-Hans',
        // 'zh',
      ],
      auth: {
        logo: Logo
      },

      head: {
        favicon: favicon
      },

      menu: {
        logo: Logo
      },

      translations: {
        en: {
            "Auth.form.button.login.strapi": "Log in via Tongle",
            "Auth.form.welcome.title": "Welcome to Tongle Dashboard",
            "Auth.form.welcome.subtitle": "Log in to your Tongle account",
            "Auth.form.register.subtitle": "Credentials are only used to authenticate in Vui. All saved data will be stored in your database.",
            "HomePage.welcome.congrats.content": "You are logged in as the first administrator. To discover the powerful features provided by Chong An Bui,",
            "app.components.HomePage.welcomeBlock.content": "Congrats! You are logged as the first administrator. To discover the powerful features provided by Chong An Bui, we recommend you to create your first Content type!",
            "app.components.HomePage.welcomeBlock.content.again": "We hope you are making progress on your project! Feel free to read the latest news about Tongle. We are giving our best to improve the product based on your feedback.",

            "Settings.application.strapiVersion": "tongle version",
            "Settings.application.strapi-version": "tongle version",
            "Settings.permissions.users.listview.header.subtitle": "All the users who have access to the Tongle admin panel",
            "app.components.LeftMenu.navbrand.title": "Tongle",
            "app.components.LeftMenu.navbrand.workplace": "Dashboard",
            "app.components.BlockLink.blog.content": "Read the latest news about Tongle Dashboard and the ecosystem.",
            "app.components.BlockLink.tutorial.content": "Follow step-by-step instructions to use and customize Tongle Dashboard.",
            "app.components.MarketplaceBanner": "Discover plugins built by the community, and many more awesome things to kickstart your project, on Jetski Awesome.",
            "app.components.MarketplaceBanner.image.alt": "a jetski rocket logo",
            "app.components.UpgradePlanModal.text-power": "Unlock the full power of Tongle by upgrading your plan to the Enterprise Edition",
            "app.components.UpgradePlanModal.text-strapi": "of Tongle Dashboard by upgrading your plan to the",
            "components.AutoReloadBlocker.description": "Run Tongle Dashboard with one of the following commands:",
            "notification.version.update.message": "A new version of Tongle Dashboard is available",
        },
        
      },
      tutorials: false,
      notifications: { release: false },
      theme: {
        colors: {
          // primary100: '#00B482',
          primary200: '#00B462',  
          primary500: '#00B442',
          primary600: '#00B422',
          primary700: '#009422',
          buttonPrimary600:'#00B482',
          buttonPrimary500: '#00B442',
        }
      },

    },
    bootstrap(app) {
      console.log(app);
    },
  };
  