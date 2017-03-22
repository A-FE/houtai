<template>
    <div class="detail">
        <h2 style="margin-top:0;">{{ activeTitle }}</h2>
        <el-row :gutter="20">
            <el-col :span="5">发起人: {{ hostPerson }}</el-col>
            <el-col :span="10">发起时间: {{ hostTime }}</el-col>
            <el-col :span="5">浏览数: {{ readNum }}</el-col>
        </el-row>
          <hr>
        <el-row :gutter="20">
          <el-col :span="24">
            <el-tabs @tab-click="routerTo" class="tab">
              <el-tab-pane label="活动详情"></el-tab-pane>
              <el-tab-pane label="报名管理"></el-tab-pane>
              <el-tab-pane label="签到"></el-tab-pane>
              <el-tab-pane label="数据统计"></el-tab-pane>
              <el-tab-pane label="评价管理"></el-tab-pane>
            </el-tabs>
          </el-col>
        </el-row>
      <transition name="fade">
        <router-view></router-view>
      </transition>
    </div>
</template>

<script>

    export default {
        name:'index',
        data: function () {
            return {
              activeTitle:'活动主题',
              hostPerson:'发起人姓名',
              hostTime:'2016年9月14日',
              readNum:'1999'
            }
        },
        methods: {
          routerTo: function (tab,event) {
            this.$router.push('/activeManage/detail/page'+(tab.index+1));
          },
        },
        watch: function () {

        }
    }

</script>

<style>
  .detail .el-tabs__item{padding:0 40px;}
</style>
