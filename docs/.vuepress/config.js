/*
 * @Descripttion:
 * @Author: Cheng
 * @Date: 2021-06-24 10:57:12
 * @LastEditors: Cheng
 * @LastEditTime: 2021-06-24 13:27:07
 */
module.exports = {
  base: "/blogs/",
  title: "cyh's blog",
  description: "Vuepress blog demo",
  themeConfig: {
    // 你的GitHub仓库，请正确填写
    repo: "https://github.com/cqdcyonghao",
    // 自定义仓库链接文字。
    repoLabel: "GitHub",
    nav: [
      { text: "Home", link: "/" },
      { text: "Blogs", link: "/blog/FirstBlog.md" },
    ],
    sidebar: [
      ["/", "首页"],
      ["/blog/FirstBlog.md", "我的第一篇博客"],
    ],
  },
}
