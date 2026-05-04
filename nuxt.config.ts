// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css:["./app/assets/css/main.css"],
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
