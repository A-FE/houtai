<template>
  <div id="app">
    <!-- 头部导航 -->
    <el-row>
        <el-col :span="24">
          <el-menu default-active="5" class="el-menu-demo" mode="horizontal" @select="">
            <el-menu-item index="1">高级插件</el-menu-item>
            <el-menu-item index="2">在线商城</el-menu-item>
            <el-menu-item index="3">客户管理</el-menu-item>
            <el-menu-item index="4">系统设置</el-menu-item>
            <el-menu-item index="5">活动发布</el-menu-item>
          </el-menu>
        </el-col>
    </el-row>
    <main>
      <el-row :gutter="20">
          <!-- 左侧导航 -->
          <el-col :span="5">
              <el-menu default-active="1" class="el-menu-vertical-demo" @open="" @close="">
                  <el-menu-item index="1"><router-link to="/step1" class="router-link">活动发布</router-link></el-menu-item>
                  <el-menu-item index="2" ><router-link to="/index"  class="router-link">活动管理</router-link></el-menu-item>
              </el-menu>
          </el-col>

          <!-- 右侧主内容区 -->
          <el-col :span="19" class="main-right">
              <router-view class="view"></router-view>
          </el-col>
      </el-row>
    </main>
  </div>
</template>

<script>

import Vue from 'vue'
import Element from 'element-ui'
import 'element-ui/lib/theme-default/index.css'

Vue.use(Element)

export default {
  name: 'app'
}
</script>

<style>
#app {
  width: 1200px;
  margin: 0 auto;
  border-top: solid 4px #3091F2;
  font-family: "Helvetica Neue","PingFang SC",Arial,sans-serif;
}

main{
  min-height: 800px;
  border: solid 40px #E9ECF1;
  background-color: #FCFCFC;
}
.main-right{
  padding: 50px!important;
  margin-left: 0;
  padding-left: 70px!important;
  background-color: #fff;
}
.el-menu{background-color: transparent!important;}
.el-menu-demo{padding-left: 300px!important;}

.router-link{display:inline-block;width:100%;height:100%;text-align:center;color:#475669;text-decoration: none; }
.is-active .router-link{color:#20a0ff; }
</style>
