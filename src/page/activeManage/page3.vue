<template>
  <div class="page3">
    <el-card class="box-card">
      <el-row :gutter="20" align="middle" type="flex" justify="end" style="margin-bottom: 20px;">
        <el-col :span="3">
          签到列表
        </el-col>
        <el-col :span="21" >
          <el-input placeholder="请输入手机号或者姓名" size="large" v-model="searchText"></el-input>
        </el-col>
      </el-row>


      <el-row :gutter="20" align="middle" type="flex">
        <el-col :span="10" >
          <el-input placeholder="请输入位序列号或手机号" size="large" v-model="signInInput"></el-input>
        </el-col>
        <el-col :span="4">
          <el-button type="primary"  size="large" @click.native="signIn">签到</el-button>
        </el-col>
        <el-col :span="10" stlyle="min-width:200px;">
          <el-button>导入excel</el-button>
          <el-button>导出excel</el-button>
        </el-col>
      </el-row>

      <el-tabs type="card" @tab-click="tabClick" >
        <el-tab-pane name="全部"   label="全部"></el-tab-pane>
        <el-tab-pane name="已签到" label="已签到"></el-tab-pane>
        <el-tab-pane name="未签到" label="未签到"></el-tab-pane>
      </el-tabs>

      <el-table :data="tableData">
        <el-table-column property="name"    label="姓名"     width="80"></el-table-column>
        <el-table-column property="tel"     label="手机号"   width="130"></el-table-column>
        <el-table-column property="way"     label="报名渠道" width="100"></el-table-column>
        <el-table-column property="status"  label="状态"      width="100"></el-table-column>
        <el-table-column property="note"    label="备注"      width="100" show-tooltip-when-overflow></el-table-column>
        <el-table-column inline-template fixed="right" label="操作" width="80">
          <el-button type="text" size="mini" style="padding: 0;text-align: center;">{{ row.status == "已签到"?"取消签到":"签到" }}</el-button>
        </el-table-column>
      </el-table>


      <el-row  type="flex" align="middle" justify="end" style="padding: 20px 0;">
        <el-pagination
          @size-change=""
          @current-change=""
          :current-page="1"
          :page-sizes="[100, 200, 300, 400]"
          :page-size="100"
          layout="sizes, prev, pager, next"
          :total="totalItemsNum">
        </el-pagination>
      </el-row>
    </el-card>

  </div>
</template>

<script>
  import debounce from 'lodash.debounce'

  /* 测试数据 */
  const testData = [
    {
      name: 'Allen',
      tel: '18825144569',
      way: '祖传链接',
      status: '已签到',
      note: '喳喳'
    }, {
      name: 'Allen',
      tel: '13480278079',
      way: '祖传链接',
      status: '已签到',
      note: '喳喳'
    }, {
      name: 'Allen',
      tel: '18825188888',
      way: '祖传链接',
      status: '已签到',
      note: '喳喳'
    }, {
      name: 'Allen',
      tel: '17070897917',
      way: '祖传链接',
      status: '未签到',
      note: '喳喳'
    }, {
      name: 'Allen',
      tel: '12414389677',
      way: '祖传链接',
      status: '未签到',
      note: '喳喳'
    }
  ];
  export default {
    name:'page3',
    data: function () {
      return {
        searchText:'',
        signInInput:'',
        status:'全部',
        totalItemsNum:1000,
        tableData: '',
      }
    },
    methods: {
      filterBySearchText: function (val,data) {
        return data.filter(function (item) {
          return item.name.toLowerCase().match(val.toLowerCase()) || item.tel.match(val)
        })
      },
      filterByStatus: function (status,data) {
        return data.filter(function (item) {
          return (status=="全部") ? true : (item.status == status);
        })
      },
      filterByVal: function () {
        var data = this.filterByStatus(this.status,testData);
        this.tableData = this.searchText ? this.filterBySearchText(this.searchText,data):data;
      },
      tabClick: function (status) {
        this.status = status;
        this.filterByVal();
      },
      signIn: function () {
        console.log("签到");
      }
    },
    watch: {
      searchText: debounce(function (val, oldVal) {
        this.filterByVal();
      }, 500)
    },
    created: function () {
      this.tableData = testData ;
    }

  }


</script>

<style>
  .page3 .el-row{margin-bottom: 20px;}

</style>
