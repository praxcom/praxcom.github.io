import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "Praxcom Blog",
  description: "Markdown Driven Blog",
  base: '', 
  themeConfig: {
    nav: [
      { text: 'Home', link: '' },
    ],
    sidebar: [
      {
        text: 'Navigation',
        items: [
          { text: 'Home', link: '' }
        ]
      },
      {
        text: 'Articles',
        items: getPosts() 
      }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/praxcom' }
    ]
  },
  appearance: 'dark' // Forces dark mode
})
