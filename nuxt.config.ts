// https://nuxt.com/docs/api/configuration/nuxt-config
import { createResolver } from '@nuxt/kit'
import tailwindcss from "@tailwindcss/vite";
const { resolve } = createResolver(import.meta.url)
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: [resolve('./app/assets/css/main.css')],
  $env:{

  },
  vite:{
    plugins:[
        tailwindcss(),
    ]
  },
  runtimeConfig:{
    public:{
      apiKey:"localhost:3000"
    }
  }
})
