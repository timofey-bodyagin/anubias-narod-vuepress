const { description } = require('../../package')

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'Буцефаландры для души',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    title: '',
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
            'p01',
            'p02',
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
  ]
}
