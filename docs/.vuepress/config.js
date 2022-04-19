/*
 * @Descripttion:
 * @Author: Cheng
 * @Date: 2021-06-24 10:57:12
 * @LastEditors: Cheng
 * @LastEditTime: 2022-04-20 00:24:52
 */
const nav = require("./config/nav")
const sidebar = require("./config/sidebar")
const plugins = require("./config/plugins")
module.exports = {
  base: "/blog/",
  title: "cyh's Blog",
  description: "你只需要努力，剩下的交给时间。",
  // html头部
  head: [
    ["link", { rel: "icon", href: "/favicon.ico" }],
    ["meta", { name: "viewport", content: "width=device-width,initial-scale=1,user-scalable=no" }],
    ["meta", { name: "keywords", content: "cyh,博客" }],
  ],
  markdown: {
    lineNumbers: true,
  },
  themeConfig: {
    nav,
    sidebar,
  },
  plugins,
}
