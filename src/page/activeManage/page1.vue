<template>
    <div class="page1">
<<<<<<< HEAD
        <p style="color: #999;font-size: 14px;">活动详情的按照内容板块可分别编辑，活动结束后不可编辑。</p>
        <el-tabs type="card" @tab-click="routerTo">
          <el-tab-pane label="活动信息"></el-tab-pane>
          <el-tab-pane label="报名签到"></el-tab-pane>
          <el-tab-pane label="分享设置"></el-tab-pane>
          <el-tab-pane label="个性化设置"></el-tab-pane>
        </el-tabs>
        <router-view></router-view>
=======
        活动管理
>>>>>>> origin/master
    </div>
</template>
<script>

  export default {
<<<<<<< HEAD
=======
    name:'page1',
>>>>>>> origin/master
    data: function () {
      return {

      }
    },
<<<<<<< HEAD
    methods: {
      routerTo: function (val) {
        this.$router.push('/activeManage/page1/step'+val);
      }
    },
    watch: {

    },
    created: function () {
=======
    methods: function () {

    },
    watch: function () {
>>>>>>> origin/master

    }
  }

</script>
<<<<<<< HEAD
=======

>>>>>>> origin/master
<style>

</style>
