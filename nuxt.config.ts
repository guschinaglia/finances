// https://nuxt.com/docs/api/configuration/nuxt-config

import Aura from '@primeuix/themes/aura';

export default defineNuxtConfig({
    compatibilityDate: '2024-11-01',
    devtools: { enabled: true },
    // ssr: false,
    modules: [
        '@primevue/nuxt-module',
        'nuxt-vuefire',
        '@nuxtjs/tailwindcss'
    ],
    primevue: {
      options: {
          theme: {
              preset: Aura
          }
      }
    },
    vuefire: {
        config: {
            apiKey: "AIzaSyAn9BphNsV50qXoa0X7OOJzz3erci_uKYo",
            authDomain: "finances-52999.firebaseapp.com",
            projectId: "finances-52999",
            storageBucket: "finances-52999.firebasestorage.app",
            messagingSenderId: "924774493234",
            appId: "1:924774493234:web:795c1c6c24d1732546e02b",
            measurementId: "G-HDSPFKYFFN"
        },
        auth: {
            enabled: true
        }
    }
})