<template>
  <div class="page2">
      <el-card class="box-card">
        <el-row :gutter="20" align="middle" type="flex" justify="end" style="margin-bottom: 20px;">
          <el-col :span="3">
            报名列表
          </el-col>
          <el-col :span="15" :offset="3">
            <el-input placeholder="请输入手机号或者姓名" size="large" v-model="searchText"></el-input>
          </el-col>
          <el-col :span="3">
            <el-button size="large" icon="search">搜索</el-button>
          </el-col>
        </el-row>


    <el-row :gutter="20" align="middle" type="flex" style="padding: 20px;">
      <el-col :span="6" :offset="2">已选择{{ chooseNum }} 个报名用户</el-col>
      <el-col :span="16">
        <el-button>通过</el-button>
        <el-button>拒绝</el-button>
        <el-button>退款</el-button>
      </el-col>
    </el-row>

    <el-tabs type="card" @tab-click="" >
      <el-tab-pane label="全部"></el-tab-pane>
      <el-tab-pane label="待支付"></el-tab-pane>
      <el-tab-pane label="待审核"></el-tab-pane>
      <el-tab-pane label="退款中"></el-tab-pane>
      <el-tab-pane label="已成功报名"></el-tab-pane>
      <el-tab-pane label="已关闭报名"></el-tab-pane>
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
          <el-pagination
            @sizechange=""
            @currentchange=""
            :current-page="1"
            :page-sizes="[100, 200, 300, 400]"
            :page-size="100"
            layout="sizes, prev, pager, next"
            :total="1000">
          </el-pagination>
    </el-row>
    </el-card>

  </div>
</template>

<script>

    export default {
      name:'page2',
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

</script>

<style>

</style>
