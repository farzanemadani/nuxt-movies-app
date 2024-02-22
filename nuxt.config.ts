// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules:[
    'nuxt-windicss',
    '@vueuse/nuxt'
  ],
  runtimeConfig:{
    apiKey: process.env.NUXT_API_KEY || '432b646cfe61b20ff431206356e49d4a',
    apiBaseUrl: process.env.NUXT_API_KEY_URL || 'https://api.themoviedb.org/3',
    public: {
      imgBaseUrl: '',
    }
  },
})
