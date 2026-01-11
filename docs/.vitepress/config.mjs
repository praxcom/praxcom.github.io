import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "Praxcom Blog",
  description: "Markdown Driven Blog",
  base: '/', 
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
    ],
    sidebar: [
      {
        text: 'Articles',
        items: [
          // This tells VitePress to look into the 'posts' directory
          { text: 'My First Post', link: '/posts/post-1' },
          { text: 'Second Article', link: '/posts/post-2' },
        ],
      }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/praxcom' }
    ]
  },
  appearance: 'dark' // Forces dark mode
})