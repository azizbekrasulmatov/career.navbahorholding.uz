// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2026-07-23',
  devtools: { enabled: true },

  runtimeConfig: {
    // Переопределяется переменной окружения NUXT_HH_USER_AGENT
    hhUserAgent: 'career.navbahorholding.uz/1.0 (hr@navbahorholding.uz)',
  },

  css: [
    '~/assets/css/fonts.css',
    '~/assets/css/main.css',
    '~/assets/css/burger.css',
  ],

  app: {
    head: {
      htmlAttrs: { lang: 'ru' },
      title: 'КАРЬЕРА',
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1, viewport-fit=cover' },
        {
          name: 'description',
          content:
            'Карьера в Navbahor Holding — вакансии, обучение и развитие в одной из ведущих фармацевтических компаний Узбекистана.',
        },
      ],
      link: [{ rel: 'icon', href: '/img/icon.png' }],
    },
  },
})
