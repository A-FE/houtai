<template>
  <div id="app">
    <!-- 头部导航 -->
    <header class="header" :class="{ 'header-fixed' : headerFixed }">
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
    </header>
    <div v-show="headerFixed" style="position: relative;height: 60px;width: 100%;"></div>

    <main>
      <el-row :gutter="20" style="margin-left: 0;">
          <!-- 左侧导航 -->
        <el-col :span="4" style="text-align: center;">
          <el-menu default-active="/activePublic" class="el-menu-vertical-demo" @open="" @close="" :router="true">
            <el-menu-item index="/activePublic">活动发布</el-menu-item>
            <el-menu-item index="/activeManage" >活动管理</el-menu-item>
          </el-menu>
        </el-col>

          <!-- 右侧主内容区 -->
          <el-col :span="20" class="main-right" >
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
import $ from 'jquery'

Vue.use(Element)

export default {
  name: 'app',
  data: function (){
    return {
      headerFixed : true
    }
  },
  created: function(){
    this.$router.push('/activePublic');
  },
  methods: {

  },

}
</script>

<style>
  body{margin: 0;}
#app {
  min-width: 1200px;
  margin: 0 auto;
  font-family: "Helvetica Neue","PingFang SC",Arial,sans-serif;
}
/* 头部导航 */
header{z-index: 1000;min-width: 1200px;transition: all 0.5s ease;  border-top: solid 4px #3091F2;  background-color: #fff;  box-shadow: 0 2px 4px 0 rgba(0,0,0,.12),0 0 6px 0 rgba(0,0,0,.04);  }
header.header-fixed{position: fixed;top: 0;left: 0;right: 0;}
header .el-menu-demo{padding-left: 300px!important;}

/* 主内容区 */
main{  min-height: 800px;  border: solid 40px #E9ECF1;  background-color: #FCFCFC;  }
main .main-right{  padding: 50px!important;  margin-left: 0;  padding-left: 70px!important;  background-color: #fff;  }
main .el-menu{background-color: transparent!important;}

/*  */
.router-link{display:inline-block;width:100%;height:100%;text-align:center;color:#475669;text-decoration: none; }
.is-active .router-link{color:#20a0ff; }

/* 单选框 */
  .el-form-item .el-radio+.el-radio {
    margin-left: 30px!important;
  }
  /* 路由切换动效 */
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s
  }
  .fade-enter, .fade-leave-active {
    opacity: 0
  }

</style>
