5// https://nuxt.com/docs/api/configuration/nuxt-config
import vuetify, { transformAssetUrls } from "vite-plugin-vuetify";
export default defineNuxtConfig({
  devServer: {
    host: '0.0.0.0',
    port: 3000
},
  googleFonts: {
    families: {
      Roboto: true,
      'Josefin+Sans': true,
      Lato: [100, 300],
      Raleway: {
        wght: [100, 400],
        ital: [100]
      },
      Inter: '200..700',
      'Crimson Pro': {
        wght: '200..900',
        ital: '200..700',
      }
    }
  },
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  css: ["@/assets/style.css"],
  app: {
    pageTransition: { name: "page", mode: "out-in" },
    head: {
      title: 'pizza',
      meta: [
        { name: "disciption", content: "" },
        { name: "keywords", content: "" },
        { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' }
      ],
    },
  },

  build: {
    transpile: ["vuetify"],
  },
  plugins: [
    { src: "~/plugins/jquery.js", mode: "client" },
    { src: "~/plugins/swiper.js", mode: "client" },
    { src: "~/plugins/aos", mode: "client" },
  ],
  modules: [
    (_options, nuxt) => {
      nuxt.hooks.hook("vite:extendConfig", (config) => {
        // @ts-expect-error
        config.plugins.push(vuetify({ autoImport: true }));
      });
    },
    

    //...
    "@pinia/nuxt",
    ['@nuxtjs/google-fonts', {
      families: {
        Roboto: true,
        Inter: [400, 700],
        'Josefin+Sans': true,
        Lato: [100, 300],
        Raleway: {
          wght: [100, 400],
          ital: [100]
        },
        'Crimson Pro': {
          wght: '200..900',
          ital: '200..700',
        }
      }
  }],
  ],

  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },
});
