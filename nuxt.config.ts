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

  modules: ['nuxt-quasar-ui'],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})
