export default {
  target: 'static',
  // html属性配置
  head: {
    title: 'dj-libiary',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // 全局样式
  css: [
    'element-ui/lib/theme-chalk/index.css'
  ],

  // 插件
  plugins: [
    '@/plugins/element-ui',
    '@/plugins/axios'
  ],
  axios: {
    proxy: true,
    prefix: '/api', // baseURL
    credentials: true,
  },
  proxy: {
    '/api': {
      target: 'https://aabbcc.com/api', // 代理地址
      changeOrigin: true,
      pathRewrite: {
        '^/api': '', //将 /api 替换掉
      }

    }
  },
  components: true,
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
  ],

  // modules依赖
  modules: [
    '@nuxtjs/axios',
    "@nuxtjs/proxy"
  ],

  // 打包依赖
  build: {
    transpile: [/^element-ui/],
  },
  // 配置页面访问前中间件
  router: {
    middleware: 'midDemo'
  }
}
