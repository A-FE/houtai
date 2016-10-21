<template>
<<<<<<< HEAD
  <div class="page5">
    <el-card class="box-card">
      <el-row :gutter="20" align="middle" type="flex" justify="end" style="margin-bottom: 20px;">
        <el-col :span="3">
          评价列表
        </el-col>
        <el-col :span="15" :offset="3">
          <el-input placeholder="请输入手机号或者姓名" size="large" v-model="searchText"></el-input>
        </el-col>
        <el-col :span="3">
          <el-button size="large" icon="search">搜索</el-button>
        </el-col>
      </el-row>

      <el-tabs type="card" @tab-click="" >
        <el-tab-pane label="全部"></el-tab-pane>
        <el-tab-pane label="未审核"></el-tab-pane>
        <el-tab-pane label="审核通过"></el-tab-pane>
        <el-tab-pane label="审核不通过"></el-tab-pane>
      </el-tabs>

      <el-table :data="tableData" selection-mode="multiple" style="width: 100%" @selectionchange="">
        <el-table-column type="selection" ></el-table-column>
        <el-table-column property="name"      label="姓名"      width="80" ></el-table-column>
        <el-table-column property="tel"       label="手机号"    width="130" ></el-table-column>
        <el-table-column property="evaluate"  label="评价内容" show-tooltip-when-overflow></el-table-column>
        <el-table-column property="status"    label="状态"      width="100"></el-table-column>
        <el-table-column property="note"      label="备注" ></el-table-column>
      </el-table>


      <el-row  type="flex" align="middle" justify="end" style="padding: 20px 0;">
        <el-col :span="10">
          <el-button>审核通过</el-button>
          <el-button>直接拒绝</el-button>
        </el-col>

        <el-col :span="14">
          <el-pagination
            @sizechange=""
            @currentchange=""
            :current-page="1"
            :page-sizes="[100, 200, 300, 400]"
            :page-size="100"
            layout="sizes, prev, pager, next"
            :total="1000">
          </el-pagination>
        </el-col>
      </el-row>

    </el-card>
=======
  <div class="page1">
    评价管理
>>>>>>> origin/master
  </div>
</template>

<script>
  export default {
<<<<<<< HEAD
    name: 'page5',
    data: function () {
      return {
        searchText:'',
        tableData: [{
          name: 'Allen',
          tel: '18825144569',
          evaluate: '祖传链接好啊',
          status: '待审核',
          note:'喳喳'
        },{
          name: 'Allen',
          tel: '18825144569',
          evaluate: '祖传链接好啊',
          status: '待审核',
          note:'喳喳'
        },{
          name: 'Allen',
          tel: '18825144569',
          evaluate: '祖传链接好啊',
          status: '待审核',
          note:'喳喳'
        },{
          name: 'Allen',
          tel: '18825144569',
          evaluate: '祖传链接好啊',
          status: '待审核',
          note:'喳喳'
        },{
          name: 'Allen',
          tel: '18825144569',
          evaluate: '祖传链接好啊',
          status: '待审核',
          note:'喳喳'
        }]
      }
    },
    methods: {},
    watch: {}
=======
    name:'page5',
    data: function () {
      return {

      }
    },
    methods: function () {

    },
    watch: function () {

    }
>>>>>>> origin/master
  }

</script>

<style>

</style>
