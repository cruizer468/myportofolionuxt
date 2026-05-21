export default {
  // Disable server-side rendering
  ssr: false,

  // Static target
  target: 'static',

  // Global page headers
  head: {
    title: 'wahyuportofolionuxtjs',

    meta: [
      { charset: 'utf-8' },

      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },

      {
        hid: 'description',
        name: 'description',
        content: ''
      }
    ],

    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico'
      },

      {
        rel: 'stylesheet',
        href: 'https://cdn.jsdelivr.net/gh/devicons/devicon@master/devicon.min.css'
      }
    ]
  },

  // Global CSS
  css: [
    'assets/scss/app.scss'
  ],

  // Plugins
  plugins: [
    {
      src: '~/plugins/particles.js',
      mode: 'client'
    }
  ],

  // Auto import components
  components: true,

  // Build modules
  buildModules: [
    '@nuxtjs/tailwindcss'
  ],

  // Modules
  modules: [],

  // Tailwind config
  tailwindcss: {
    jit: false
  },

  // Build config
  build: {
    transpile: [
      '@tsparticles/vue2',
      'tsparticles'
    ],

    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {}
      },

      preset: {
        stage: 1
      }
    }
  }
}
