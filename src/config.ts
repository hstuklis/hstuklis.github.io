import type { Config } from '~/types'

const config: Config = {
  site: 'https://hstuklis.github.io',
  font: 'IBM Plex Mono',
  
  title: 'Stuklink',
  description: 'Henry\'s homepage to the world wide web',
  author: 'Henry Stuklis',
  tags: ['Henry Stuklis', 'hstuklis', 'Stuklink', 'homepage', 'blog'],
  pageSize: 10,
  headerLinks: [
    {
      name: 'Home',
      url: '/'
    },
    {
      name: 'About',
      url: '/about'
    },
    {
      name: 'Posts',
      url: '/posts'
    }
  ],
  footerLinks: [
    'https://github.com/hstuklis'
  ]
}

export default config