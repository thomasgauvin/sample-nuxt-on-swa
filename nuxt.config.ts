export default defineNuxtConfig({
  devtools: { enabled: true },
  routeRules: {
    '/': { prerender: true },
    '/static': { prerender: true, static: true },
  },
  nitro: {
    azure: {
      config: {
        platform: {
          apiRuntime: "node:18"
        }
      }
    }
  }
})