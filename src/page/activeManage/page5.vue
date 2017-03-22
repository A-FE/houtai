<template>
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

      <el-row :gutter="20" align="middle" type="flex" style="padding: 20px;">
        <el-col :span="6" style="width: 160px;">已选择{{ selectNum }} 个报名用户</el-col>
        <el-col :span="18" style="width: 400px;" class="btn-group">
          <el-button>通过</el-button>
          <el-button>拒绝</el-button>
          <el-button>取消审核</el-button>
        </el-col>
      </el-row>

      <el-tabs type="card" @tab-click="tabClick">
        <el-tab-pane name="全部" label="全部"></el-tab-pane>
        <el-tab-pane name="未审核" label="未审核"></el-tab-pane>
        <el-tab-pane name="审核通过" label="审核通过"></el-tab-pane>
        <el-tab-pane name="审核不通过" label="审核不通过"></el-tab-pane>
      </el-tabs>

      <el-row>
        <el-table :data="tableData"
                  @selection-change="selectionchange"
                  @cell-click="handleSelect"
                >
          <el-table-column type="selection" ></el-table-column>
          <el-table-column property="name"      label="姓名"      width="80" ></el-table-column>
          <el-table-column property="tel"       label="手机号"    width="130" ></el-table-column>
          <el-table-column property="evaluate"  label="评价内容" width="200" show-tooltip-when-overflow></el-table-column>
          <el-table-column property="status"    label="状态"      width="120"></el-table-column>
          <el-table-column property="note"      label="备注" width="150"></el-table-column>
        </el-table>
      </el-row>


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

  const testData =  [
    {
      name: 'Allen',
      tel: '18825144569',
      evaluate: '祖传链接好啊',
      status: '审核不通过',
      note:'喳喳'
    },{
      name: '蝈蝈',
      tel: '13825144569',
      evaluate: '祖传链接好啊',
      status: '审核通过',
      note:'喳喳'
    },{
      name: '哎呀',
      tel: '17025144569',
      evaluate: '祖传链接好啊',
      status: '未审核',
      note:'喳喳'
    },{
      name: 'Allen',
      tel: '15925144569',
      evaluate: '祖传链接好啊',
      status: '未审核',
      note:'喳喳'
    },{
      name: '大伦',
      tel: '13625144569',
      evaluate: '祖传链接好啊',
      status: '未审核',
      note:'喳喳'
    }];
  export default {
    name: 'page5',
    data: function () {
      return {
        status:'全部',
        searchText:'',
        selectNum:0,
        totalItemsNum:1000,
        tableData:[],
        multipleSelection: []

      }
    },
    methods: {
      handleSelect: function (row, column, cell, event) {
        if (column.label == '操作') {
          this.$router.push('/activeManage/detail/page1');
        } else if (column.type == 'selection') {
          row.$info = !row.$selected;
        } else {
          row.$selected = !row.$selected;
          row.$info = row.$selected;
        }
      },
      selectionchange: function (val) {
        var arr = [];
        val.forEach(function (item) {
          arr.push(item.id);
        });
        this.selectItems = arr;
        this.selectNum = this.selectItems.length;
      },
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

</style>
