import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({

  title: "江苏口述史收集库",
  description: "A VitePress Site",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '主页', link: '/' },
      { text: '访问案例', link: '/nantong' },
    ],

    sidebar: [
      {
        text: '访问案例',
        items: [
          { text: '南通', link: '/nantong' },
          { text: '镇江', link: '/zhenjiang' },
          { text: '南京', link: '/nanjing' },
          { text: '泰兴', link: '/taixing' }
        ]
      }
    ],

    socialLinks: [
      { icon: {svg:'<svg t="1737104552005" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6451" width="200" height="200"><path d="M2.1 873.8v81.6c0 11.5 9.3 20.8 20.8 20.8h980.2c11.5 0 20.8-9.3 20.8-20.8v-81.6c0-11.5-9.3-20.8-20.8-20.8H23c-11.5 0-20.9 9.3-20.9 20.8zM509.3 322.8h399.3c4.1 0 8.2-1.2 11.6-3.6l77.3-52.1c12.2-8.2 12.3-26.1 0.2-34.4l-26.1-18.1c-1.5-1-3-1.8-4.7-2.4L519.3 47.3c-4.7-1.7-9.8-1.7-14.5 0L55.8 214c-1.5 0.6-3 1.3-4.4 2.3l-24.6 16.6c-12.3 8.3-12.3 26.3 0 34.6l77 51.8c3.4 2.3 7.5 3.6 11.6 3.6h393.9zM141.3 378.9v346h-23c-6.2 0-12.1 2.8-16.1 7.6l-27.3 50.3c-11.2 13.6-1.5 34.1 16.1 34.1h844.3c17.5 0 27.2-20.2 16.3-33.8l-26.4-50.3c-4-5-10-7.9-16.3-7.9H888v-346c0-11.5-9.3-20.8-20.8-20.8h-99.3c-11.5 0-20.8 9.3-20.8 20.8v346h-61v-346c0-11.5-9.3-20.8-20.8-20.8H566c-11.5 0-20.8 9.3-20.8 20.8v346h-61v-346c0-11.5-9.3-20.8-20.8-20.8h-99.3c-11.5 0-20.8 9.3-20.8 20.8v346h-61v-346c0-11.5-9.3-20.8-20.8-20.8h-99.3c-11.5-0.1-20.9 9.2-20.9 20.8z" fill="#4D4D4D" p-id="6452"></path></svg>'},
      link: 'https://wlt.jiangsu.gov.cn/' },
      { icon: {svg: '<svg t="1737104166998" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4497" width="200" height="200"><path d="M923.392 736.32V372.96h49.472c23.104 0 43.36-15.744 49.376-38.368a52.224 52.224 0 0 0-23.616-58.368L543.808 7.04a50.528 50.528 0 0 0-51.072-0.224L27.84 275.968A52.224 52.224 0 0 0 3.84 334.4c5.92 22.752 26.24 38.592 49.408 38.592h52.48V736.32h-3.68C45.76 736.32 0 782.72 0 839.872v48.544C0 945.536 45.76 992 102.016 992h819.968C978.24 992 1024 945.536 1024 888.416v-48.544c0-56.64-44.992-102.752-100.608-103.552z m-102.24 0h-76.64V372.96h76.64V736.32zM463.36 372.96V736.32h-76.576V372.96h76.608z m102.272 0h76.608V736.32h-76.608V372.96z m-47.872-261.12l265.856 157.312h-537.6l271.744-157.344z m-309.888 261.12h76.64V736.32H207.904V372.96z m-105.664 515.52l-0.224-48.352 819.744-0.256 0.224 48.32-819.744 0.288z" fill="#0025A2" p-id="4498"></path></svg>'},
       link: 'https://www.njmuseum.com/zh/numberIndex?id=4' }
    ],
    // 底部配置
    footer: {
          copyright: "Copyright © 2025-present NNU HGGG",
      },
       // 设置搜索框的样式
    search:{
      provider: "local",
      options: {
        translations: {
          button: {
            buttonText: "搜索文档",
            buttonAriaLabel: "搜索文档",
          },
          modal: {
            noResultsText: "无法找到相关结果",
            resetButtonTitle: "清除查询条件",
            footer: {
              selectText: "选择",
              navigateText: "切换",
            },
          },
        },
      },
    }
  }

})
