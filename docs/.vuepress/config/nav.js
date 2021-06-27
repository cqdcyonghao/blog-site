/*
 * @Descripttion:
 * @Author: Cheng
 * @Date: 2021-06-26 22:32:54
 * @LastEditors: Cheng
 * @LastEditTime: 2021-06-27 10:41:34
 */
module.exports = [
  { text: "主页", link: "/" },
  {
    text: "前端文章",
    items: [
      { text: "知识产出", items: [{ text: "vue相关", link: "/front-end/vue/" }] },
      { text: "学习笔记", items: [{ text: "重读《JavaScript高级程序设计》", link: "/front-end/reread-js/" }] },
    ],
  },
  {
    text: "踩坑记录",
    items: [{ text: "vue开发", link: "/record/vue-tap/" }],
  },
  { text: "我的信息", link: "/about/" },
  { text: "github", link: "https://github.com/cqdcyonghao" },
]
