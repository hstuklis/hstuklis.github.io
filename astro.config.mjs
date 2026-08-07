import { defineConfig, fontProviders } from 'astro/config'
import { unified } from '@astrojs/markdown-remark'
import tailwindcss from '@tailwindcss/vite'
import remarkMath from 'remark-math'
import remarkDirective from 'remark-directive'
import rehypeKatex from 'rehype-katex'
import { remarkDirectiveClasses } from './src/lib/remark-directives.mjs'

export default defineConfig({
  site: 'https://hstuklis.github.io',
  vite: {
    plugins: [tailwindcss()]
  },
  fonts: [
    {
      provider: fontProviders.google(),
      name: 'Archivo Black',
      cssVariable: '--ff-archivo',
      fallbacks: ['sans-serif'],
    },
    {
      provider: fontProviders.google(),
      name: 'Public Sans',
      cssVariable: '--ff-public-sans',
      weights: [400, 600],
      styles: ['normal', 'italic'],
      fallbacks: ['sans-serif'],
    },
    {
      provider: fontProviders.google(),
      name: 'IBM Plex Mono',
      cssVariable: '--ff-ibm',
      weights: [400, 600],
      styles: ['normal', 'italic'],
      fallbacks: ['monospace'],
    },
    {
      provider: fontProviders.google(),
      name: 'Cormorant Garamond',
      cssVariable: '--ff-corm',
      weights: [400, 600],
      styles: ['normal', 'italic'],
      fallbacks: ['sans-serif'],
    },
  ],
  markdown: {
    processor: unified({
      remarkPlugins: [remarkMath, remarkDirective, remarkDirectiveClasses],
      rehypePlugins: [rehypeKatex],
    }),
  }
})
