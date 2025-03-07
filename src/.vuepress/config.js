const { description } = require('../../package')

module.exports = {
  base: '/anubias-narod-vuepress/',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'Буцефаландры - почтой',
  // base: '/anubias-narod-vuepress/',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: 'На нашем сайте вы можете купить буцефаландры. Растения высылаются с мая по сентябрь почтой России.',

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['meta', { name: 'og:title', content: 'Буцефаландры - почтой' }],
    ['meta', { name: 'og:description', content: 'На нашем сайте вы можете купить буцефаландры. Растения высылаются с мая по сентябрь почтой России.' }],
    ['meta', { name: 'og:image', content: 'https://anubias-narod.com/bucefa.jpg' }],
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    title: 'Буцефаландры для души',
    logo: '/a-logo.png',
    repo: '',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,
    search: false,
    nav: [
      {
        text: 'Магазин',
        link: '/',
      },
      {
        text: 'Мои буцефаландры',
        link: '/my/'
      },
      {
        text: 'Фотодневник',
        link: '/one_year/'
      },
      {
        text: 'Разведение',
        link: '/breeding/'
      },
      {
        text: 'Болезни',
        link: '/diseases/'
      },
      {
        text: 'Публикации',
        link: '/pub/'
      }
    ],
    sidebar: {
      '/one_year/': [
        {
          sidebarDepth: 0,
          title: 'Фотодневник "Хроника одного года"',
          collapsable: false,
          children: [
            '/one_year/b01/',
            '/one_year/b02/',
            '/one_year/b03/',
            '/one_year/b04/',
            '/one_year/b05/',
            '/one_year/b06/',
            '/one_year/b07/',
            '/one_year/b08/',
            '/one_year/b09/',
            '/one_year/b10/',
            '/one_year/b11/',
            '/one_year/b12/'
          ]
        }
      ],
      '/pub/': [
        {
          title: 'Публикации в журналах',
          sidebarDepth: 0,
          collapsable: false,
          children: [
            '/pub/p01/',
            '/pub/p02/',
            '/pub/p03/',
            '/pub/p04/',
            '/pub/p05/',
            '/pub/p06/',
            '/pub/p07/',
            '/pub/p08/',
          ]
        }
      ],
      '/': []
    }
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
    [
      '@vuepress/plugin-google-analytics',
      {
        'ga': 'UA-196629680-1'
      }
    ]
  ]
}
