export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: '//fonts.googleapis.com/css?family=Lato|Open+Sans' }
    ],
    build: {
      extractCSS: true
    }
  },
  /*
  ** Customize the progress-bar color
  */
  loading: {
    // color: '#fff'
    color: '#41b883'
  },
  /*
  ** Global CSS
  */
  css: [
    '~/assets/css/main.scss',
    '~/node_modules/vis/dist/vis-network.min.css',
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~plugins/axios.js',
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module'
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://buefy.github.io/#/documentation
    [ 'nuxt-buefy', {  } ],
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios'
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
  },
  /*
  ** Build configuration
  */
  build: {
    vendor: ['axios', 'vis', 'lodash'],
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}
