/*
 * @Descripttion:
 * @Author: Cheng
 * @Date: 2021-06-24 10:57:12
 * @LastEditors: Cheng
 * @LastEditTime: 2021-06-27 01:31:05
 */
const nav = require("./config/nav")
// const sidebar = require("./config/sidebar")
const plugins = require("./config/plugins")
module.exports = {
  base: "/blogs/",
  title: "cyh's Blog",
  description: "你只需要努力，剩下的交给时间。",
  // html头部
  head: [
    ["link", { rel: "icon", href: "/favicon.ico" }],
    ["meta", { name: "viewport", content: "width=device-width,initial-scale=1,user-scalable=no" }],
    ["meta", { name: "keywords", content: "cyh,博客" }],
    [
      "script",
      {
        language: "javascript",
        type: "text/javascript",
        src: "https://cdn.staticfile.org/jquery/1.7.2/jquery.min.js",
      },
    ],
    [
      "script",
      {
        language: "javascript",
        type: "text/javascript",
        src: "/js/MouseClickEffect.js",
      },
    ],
  ],
  markdown: {
    lineNumbers: true,
  },
  theme: "reco",
  themeConfig: {
    nav,
    sidebar: { "/front-end/": ["", "index", "test"] },
    type: "blog",
    blogConfig: {
      // category: {
      //   location: 2, // 在导航栏菜单中所占的位置，默认2
      //   text: "分类", // 默认 “分类”
      // },
      // tag: {
      //   location: 3, // 在导航栏菜单中所占的位置，默认3
      //   text: "标签", // 默认 “标签”
      // },
      // socialLinks: [{ icon: "reco-github", link: "https://github.com/To2rk" }],
    },
    valineConfig: {
      appId: "xxxxxxxxxxxx-xxxxxx",
      appKey: "xxxxxxxxxxxxxxxxx",
    },
    logo: "/avatar.jpg",
    authorAvatar: "/avatar.jpg",
    search: true,
    searchMaxSuggestions: 10,
    // subSidebar: "auto",
    sidebarDepth: 2, // 目录深度
    lastUpdated: "上次更新",
    author: "cyh",
    record: "xxxxxxxxxxxxxx",
    startYear: "2021",
    // friendLink: [
    //   {
    //     title: "午后南杂",
    //     desc: "Enjoy when you can, and endure when you must.",
    //     email: "1156743527@qq.com",
    //     link: "https://www.recoluan.com",
    //   },
    //   {
    //     title: "Torrk's Blog",
    //     desc: "记录，成为更好的自己。",
    //     logo: "https://conimi.com/files/images/i.jpg",
    //     link: "https://conimi.com",
    //   },
    // ],
    /**
     * support for
     * '' | 'default'
     * 'coy'
     * 'dark'
     * 'funky'
     * 'okaidia'
     * 'solarizedlight'
     * 'tomorrow'
     * 'twilight'
     */
  },
  plugins,
}
