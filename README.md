# 基于vue和Element的后台管理系统
>vue2.03 + Element 1.0.0-rc.6

[在线DEMO](https://peng1992.github.io/houtai/#/activePublic)
## Build Setup

``` bash
# 安装开发依赖
npm install

# 运行
npm run dev

# 打包压缩
npm run build
```
#总结一下在使用ElementUI的过程中所遇到的一些坑
1、想给组件切换加个过渡效果，VUE官方给我们封装了过渡组件transition/transition-group, 在element元素中使用过渡组件，总是报错，是因为element1.0.0-rc.6以上版本有问题，换回1.0.0-rc.6版本就正常了
2、el-checkbox的属性label的值如果为中文时，不能加":",为数字时，必须加":",不加不会报错，但多选框点击没反应
3、其他BUG有空再来完善~

如果有任何疑问，请来信咨询[1024371442@qq.com](https://mail.qq.com/cgi-bin/frame_html?sid=INIw6UMyhoiQYF0F&url=%2Fcgi-bin%2Fmail_list%3Fsid%3DINIw6UMyhoiQYF0F%26topmails%3D0&r=cc545c6d55ff5107e3c602fd8b95d460)
