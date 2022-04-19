###
 # @Descripttion: 
 # @Author: Cheng
 # @Date: 2021-06-24 13:10:03
 # @LastEditors: Cheng
 # @LastEditTime: 2022-04-20 00:36:34
### 
#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
yarn build

# 进入生成的文件夹
cd docs/.vuepress/dist

# 如果是发布到自定义域名
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy'

git push -f git@github.com:cqdcyonghao/blog-site.git master:gh-pages

cd -