/*
 * @Descripttion:
 * @Author: Cheng
 * @Date: 2021-06-26 22:32:54
 * @LastEditors: Cheng
 * @LastEditTime: 2021-06-27 01:23:24
 */
module.exports = [
  { text: "主页", link: "/", icon: "reco-home" },
  {
    text: "前端",
    icon: "reco-blog",
    items: [
      { text: "测试", link: "/front-end/test/" },
      { text: "重读js", link: "/front-end/index/" },
    ],
  },
  { text: "时间线", link: "/timeline/", icon: "reco-date" },
  { text: "关于我", link: "/about/", icon: "reco-message" },
  { text: "github", link: "https://github.com/cqdcyonghao", icon: "reco-github" },
]
