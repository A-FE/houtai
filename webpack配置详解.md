### 导语
[webpack](https://webpack.vuefe.cn/concepts/index/)是近期最火的一款模块加载器兼打包工具，它能把各种资源，例如js、css/sass/less、图片等都作为模块来使用和处理。

我们可以直接使用require(XXX)的形式来引入所需要的模块，即使他们可能需要经过编译，但我们无需在上面花太多心思，因为webpack有着各种健全的加载器在(webpack)在默默处理这些事情，这块我们后续会提到。

你可以不打算将其用在你的项目上，你没有理由不去掌握它，因为以近期Github上各大主流的项目([Vue](https://vuefe.cn/),[React](http://reactjs.cn/react/docs/getting-started-zh-CN.html)等)，它们仓库上展示的实例都是基于webpack来开发的。

### gulp和webpack的区别？
以搭积木为例,gulp相当于为我们提供了各种各样的积木，比如长方体(代码压缩)、正方体(添加css前缀)、球体(图片压缩)、锥体(热拔插)等，我们利用这些不同功能的积木(task)，来搭建我们的房子。而webpack则直接给我们提供好一栋完整的房子，省去了中间复杂的配置过程。相比来说，webpack更加方便。

### webpack详解
#### 1. 以[vue.js中文](https://vuefe.cn/)推荐的webpack模版为例

    # 全局安装 vue-cli
    $ npm install --global vue-cli
    # 创建一个基于 webpack 模板的新项目
    $ vue init webpack my-project
    # 安装依赖，走你
    $ cd my-project
    $ npm install
    $ npm run dev

生成的项目目录如下

打开package.json

	 "scripts": {
        "dev": "node build/dev-server.js",
        "build": "node build/build.js"
      }

上面两行代码的意思是，当我们在命令行输入```cnpm run dev```,实际上执行的是```node build/dev-server.js```

打开dev-serve.js
