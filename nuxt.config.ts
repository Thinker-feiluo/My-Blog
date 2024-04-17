// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  //开关ssr模板
  ssr: true,
  // 开关调试工具
  devtools: { enabled: false },
  // 导入的包需要在这里注册
  modules: ['@element-plus/nuxt', '@pinia/nuxt'],
  css: ["bootstrap/dist/css/bootstrap.min.css"],
})
