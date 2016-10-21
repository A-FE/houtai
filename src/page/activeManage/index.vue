<template>
    <div class="index">
        <h2>{{ activeTitle }}</h2>
        <el-row :gutter="20">
            <el-col :span="5">发起人: {{ hostPerson }}</el-col>
            <el-col :span="10">发起时间: {{ hostTime }}</el-col>
            <el-col :span="5">浏览数: {{ readNum }}</el-col>
        </el-row>
          <hr>
        <el-row :gutter="20">
            <el-tabs @tab-click="routerTo">
              <el-tab-pane label="活动详情"></el-tab-pane>
              <el-tab-pane label="报名管理"></el-tab-pane>
              <el-tab-pane label="签到"></el-tab-pane>
              <el-tab-pane label="数据统计"></el-tab-pane>
              <el-tab-pane label="评价管理"></el-tab-pane>
            </el-tabs>
        </el-row>
        <router-view></router-view>
      <el-button @click.native.prevent="handleCancel"   >取消</el-button>
      <el-button @click.native.prevent="handleSave"     type="primary">保存</el-button>
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
          routerTo: function (val) {
            this.$router.push('/activeManage/page'+val);
          },
          handleCancel: function () {

          },
          handleSave: function () {

          }

        },
        watch: function () {

        }
    }

</script>

<style>

</style>
