<template>
    <div class="page1">
        <p style="color: #999;font-size: 14px;">活动详情的按照内容板块可分别编辑，活动结束后不可编辑。</p>
        <el-tabs type="card" @tab-click="routerTo">
          <el-tab-pane label="活动信息"></el-tab-pane>
          <el-tab-pane label="报名签到"></el-tab-pane>
          <el-tab-pane label="分享设置"></el-tab-pane>
          <el-tab-pane label="个性化设置"></el-tab-pane>
        </el-tabs>
        <router-view></router-view>

    </div>
</template>
<script>

  export default {

    data: function () {
      return {

      }
    },
    methods: {
      routerTo: function (val) {
        this.$router.push('/activeManage/detail/page1/step'+val);
      }
    },
    watch: {

    },
    created: function () {

    }
  }

</script>

<style>

</style>
