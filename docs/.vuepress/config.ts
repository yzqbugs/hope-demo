import { defineUserConfig } from 'vuepress'
import theme from './theme'

const base = (process.env.BASE as '/' | `/${string}/`) || '/'

export default defineUserConfig({
  base: '/hope-demo/',

  dest: './dist',

  head: [
    [
      'link',
      {
        rel: 'stylesheet',
        href: '/hope-demo/iconfont/iconfont.css',
      },
    ],
  ],

  locales: {
    '/': {
      lang: 'en-US',
      title: 'Theme Demo',
      description: 'A demo for vuepress-theme-hope',
    },
  },

  theme,
})
