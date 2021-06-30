/*
 * @Descripttion:
 * @Author: Cheng
 * @Date: 2021-06-26 22:32:54
 * @LastEditors: Cheng
 * @LastEditTime: 2021-06-30 15:04:59
 */
module.exports = [
  { text: "主页", link: "/" },
  {
    text: "前端文章",
    items: [
      { text: "知识产出", items: [{ text: "Vue", link: "/front-end/blog-vue/" }] },
      {
        text: "学习笔记",
        items: [
          { text: "《JavaScript高级程序设计》", link: "/front-end/note-JavaScript/" },
          { text: "《TypeScript入门教程》", link: "/front-end/note-TypeScript/" },
        ],
      },
    ],
  },
  {
    text: "开发工具",
    items: [{ text: "Git", link: "/goods/git/" }],
  },
  {
    text: "踩坑记录",
    items: [{ text: "vue开发", link: "/record/" }],
  },
  { text: "我的信息", link: "/about/" },
  { text: "github", link: "https://github.com/cqdcyonghao" },
]
