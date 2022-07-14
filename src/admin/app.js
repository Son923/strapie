import GreenLogo from './extensions/green-logo.png';
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
        // 'vi',
        // 'zh-Hans',
        // 'zh',
      ],
      auth: {
        logo: GreenLogo
      },

      head: {
        favicon: favicon
      },

      menu: {
        logo: GreenLogo
      },

      translations: {
        en: {
            "app.components.LeftMenu.navbrand.title": "Jetski",
            "app.components.LeftMenu.navbrand.workplace": "Dashboard",

            "Auth.form.welcome.title": "Welcome to Jetski!",
            "Auth.form.welcome.subtitle": "Log in to your Jetski account",
            "Auth.form.register.subtitle": "Credentials are only used to authenticate in Jetski. All saved data will be stored in your database.",
            "HomePage.welcome.congrats.content": "You are logged in as the first administrator. To discover the powerful features provided by Jetski,",
            "app.components.HomePage.welcomeBlock.content": "Congrats! You are logged as the first administrator. To discover the powerful features provided by Jetski, we recommend you to create your first Content type!",
            "app.components.HomePage.welcomeBlock.content.again": "We hope you are making progress on your project! Feel free to read the latest news about Jetski. We are giving our best to improve the product based on your feedback.",
        },
      },
      tutorials: false,
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
  