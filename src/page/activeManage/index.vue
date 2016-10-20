<template>
    <div class="index">
        <h2>{{ activeTitle }}</h2>
        <el-row :gutter="20">
            <el-col :span="5">发起人: {{ hostPerson }}</el-col>
            <el-col :span="5">发起时间: {{ hostTime }}</el-col>
            <el-col :span="5">浏览数: {{ readNum }}</el-col>
        </el-row>

        <el-row :gutter="20">
            <el-tabs>
              <el-tab-pane label="活动信息"></el-tab-pane>
              <el-tab-pane label="报名签到"></el-tab-pane>
              <el-tab-pane label="分享设置"></el-tab-pane>
              <el-tab-pane label="个性化设置"></el-tab-pane>
            </el-tabs>
        </el-row>
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
        methods: function () {

        },
        watch: function () {

        }
    }

</script>

<style>

</style>
