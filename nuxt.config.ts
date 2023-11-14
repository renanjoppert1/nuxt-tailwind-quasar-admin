// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  ssr: false,

  imports: {
    autoImport: true
  },

  components: [
    '~/components',
  ],

  app: {
    head: {
      title: 'Admin Quasar + Tailwind CSS',
      htmlAttrs: {
        lang: 'pt-BR'
      },
      bodyAttrs: {
        class: ''
      },
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
    }
  },

  css: ['~/assets/css/main.css'],

  modules: ['nuxt-quasar-ui', '@nuxtjs/google-fonts'],

  quasar: {
    config: {
      dark: false,
      brand: {
        primary: '#7367F0',


        positive: '#21BA45',
        negative: '#C10015',
        info: '#31CCEC',
        warning: '#F2C037'
      }
    }
  },

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  googleFonts: {
    families: {
      Poppins: [400, 700],
    }
  }
})
