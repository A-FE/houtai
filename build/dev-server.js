var path = require('path')          // node.js的path对象
var express = require('express')   // node.js的express框架
var webpack = require('webpack')   // 引入webpack
var config = require('../config')  // 引入上级目录下config/index.js
var opn = require('opn')           // 打开网站、文件、可执行文件
var proxyMiddleware = require('http-proxy-middleware')  // http代理，用于connect、express、browser-sync
var webpackConfig = require('./webpack.dev.conf')       // 引入同级目录下webpack.dev.conf.js文件

// default port where dev server listens for incoming traffic
var port = process.env.PORT || config.dev.port          // 配置端口
// Define HTTP proxies to your custom API backend
// https://github.com/chimurai/http-proxy-middleware
var proxyTable = config.dev.proxyTable                  // 代理表

var app = express()             // 创建一个express应用
var compiler = webpack(webpackConfig)                   // 编译配置

// express中间件，配置内存中的文件系统，在开发阶段用作静态资源服务器
var devMiddleware = require('webpack-dev-middleware')(compiler, {
  publicPath: webpackConfig.output.publicPath,          // 输出解析文件目录
  stats: {
    colors: true,
    chunks: false
  }
})

// 热更新中间件
var hotMiddleware = require('webpack-hot-middleware')(compiler)
// 当html-webpack-plugin template 改变时，强制更新页面
compiler.plugin('compilation', function (compilation) {
  compilation.plugin('html-webpack-plugin-after-emit', function (data, cb) {
    hotMiddleware.publish({ action: 'reload' })
    cb()
  })
})


// 代理 api 请求，Object.keys(proxyTable)返回一个由proxyTable属性构成的数组
Object.keys(proxyTable).forEach(function (context) {
  var options = proxyTable[context]
  if (typeof options === 'string') {
    options = { target: options }
  }
  app.use(proxyMiddleware(context, options))
})


// 用来支持 HTML5 history API
app.use(require('connect-history-api-fallback')())

// serve webpack bundle output
app.use(devMiddleware)

// enable hot-reload and state-preserving
// compilation error display
app.use(hotMiddleware)

// 配置静态资源的目录
var staticPath = path.posix.join(config.dev.assetsPublicPath, config.dev.assetsSubDirectory)
app.use(staticPath, express.static('./static'))

module.exports = app.listen(port, function (err) {
  if (err) {
    console.log(err)
    return
  }
  var uri = 'http://localhost:' + port
  console.log('Listening at ' + uri + '\n')
  opn(uri)
})
