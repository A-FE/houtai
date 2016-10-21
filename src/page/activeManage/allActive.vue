<template>
    <div class="allActive">
      <el-row>
        <el-col :span="6">
          {{ totalActiveNum }}
          <span>活动总数</span>
        </el-col>
        <el-col :span="6">
          {{ totalActiveNum }}
          <span>报名总数</span>
        </el-col>
        <el-col :span="6">
          {{ totalActiveNum }}
          <span>活动总数</span>
        </el-col>
        <el-col :span="6">
          {{ totalActiveNum }}
          <span>查看会员</span>
        </el-col>
      </el-row>
    </div>
</template>
<script>
    export default {
        name: 'allActive',
        data: function () {
          return {
            totalActiveNum: 3,
            totalSignUp:204,
          }
        }
    }
</script>
<style>

</style>
