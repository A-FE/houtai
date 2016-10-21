<template>
<<<<<<< HEAD
  <div class="page3">
    <el-card class="box-card">
      <el-row :gutter="20" align="middle" type="flex" justify="end" style="margin-bottom: 20px;">
        <el-col :span="3">
          签到列表
        </el-col>
        <el-col :span="15" :offset="3">
          <el-input placeholder="请输入手机号或者姓名" size="large" v-model="searchText"></el-input>
        </el-col>
        <el-col :span="3">
          <el-button size="large" icon="search">搜索</el-button>
        </el-col>
      </el-row>


      <el-row :gutter="20" align="middle" type="flex">
        <el-col :span="10" >
          <el-input placeholder="请输入位序列号或手机号" size="large" v-model="searchText"></el-input>
        </el-col>
        <el-col :span="3">
          <el-button type="primary"  size="large">签到</el-button>
        </el-col>
      </el-row>

      <el-tabs type="card" @tab-click="" >
        <el-tab-pane label="已签到"></el-tab-pane>
        <el-tab-pane label="未签到"></el-tab-pane>
        <el-tab-pane label="全部"></el-tab-pane>
      </el-tabs>

      <el-table :data="tableData" selection-mode="multiple" style="width: 100%" @selectionchange="">
        <el-table-column type="selection" width="50"></el-table-column>
        <el-table-column property="name"    label="姓名"     width="80"></el-table-column>
        <el-table-column property="tel"     label="手机号"   width="130"></el-table-column>
        <el-table-column property="way"     label="报名渠道" width="100"></el-table-column>
        <el-table-column property="status"  label="交易状态" width="100"></el-table-column>
        <el-table-column property="note"    label="备注"      width="100" show-tooltip-when-overflow></el-table-column>
      </el-table>


      <el-row  type="flex" align="middle" justify="end" style="padding: 20px 0;">
        <el-col :span="10">
            <el-button>取消签到</el-button>
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
    签到
>>>>>>> origin/master
  </div>
</template>

<script>

<<<<<<< HEAD
  export default {
    name:'page3',
    data: function () {
      return {
        searchText:'',
        chooseNum: 0,
        tableData: [{
          name: 'Allen',
          tel: '18825144569',
          way: '祖传链接',
          status: '待支付',
          note:'喳喳'
        },{
          name: 'Allen',
          tel: '18825144569',
          way: '祖传链接',
          status: '待支付',
          note:'喳喳'
        },{
          name: 'Allen',
          tel: '18825144569',
          way: '祖传链接',
          status: '待支付',
          note:'喳喳'
        },{
          name: 'Allen',
          tel: '18825144569',
          way: '祖传链接',
          status: '待支付',
          note:'喳喳'
        },{
          name: 'Allen',
          tel: '18825144569',
          way: '祖传链接',
          status: '待支付',
          note:'喳喳'
        }],
        multipleSelection: []
      }
    },
    methods: function () {

    },
    watch: function () {

    }
  }
=======
    export default {
        name:'page3',
        data: function () {
            return {

            }
        },
        methods: function () {

        },
        watch: function () {

        }
    }
>>>>>>> origin/master

</script>

<style>
<<<<<<< HEAD
  .page3 .el-row{margin-bottom: 20px;}
=======

>>>>>>> origin/master
</style>
