<template>
  <div class="page2">
    <el-card class="box-card">
      <el-row :gutter="20" align="middle" type="flex" justify="end" style="margin-bottom: 20px;">
        <el-col :span="3">
          报名列表
        </el-col>
        <el-col :span="21" >
          <el-input placeholder="请输入手机号或者姓名" size="large" v-model="searchText"></el-input>
        </el-col>
      </el-row>


      <el-row :gutter="20" align="middle" type="flex" style="padding: 20px;">
        <el-col style="width: 170px;">已选择{{ selectNum }} 个报名用户</el-col>
        <el-col style="width: 400px;" class="btn-group">
          <el-button>通过</el-button>
          <el-button>拒绝</el-button>
          <el-button>退款</el-button>
        </el-col>
        <el-col style="width:400px;">
            <el-button>导入excel</el-button>
            <el-button>导出excel</el-button>
            <el-button>群发信息</el-button>
        </el-col>
      </el-row>

      <el-tabs type="card"  @tab-click="tabClick">
        <el-tab-pane name="全部" label="全部"></el-tab-pane>
        <el-tab-pane name="待支付" label="待支付"></el-tab-pane>
        <el-tab-pane name="待审核" label="待审核"></el-tab-pane>
        <el-tab-pane name="退款中" label="退款中"></el-tab-pane>
        <el-tab-pane name="已成功报名" label="已成功报名"></el-tab-pane>
        <el-tab-pane name="已关闭报名" label="已关闭报名"></el-tab-pane>
      </el-tabs>

      <el-table :data="tableData"
                @selection-change="selectionchange"
                @cell-click="handleSelect"
                >
        <el-table-column type="selection" width="50"></el-table-column>
        <el-table-column property="name" label="姓名" width="80"></el-table-column>
        <el-table-column property="tel" label="手机号" width="130"></el-table-column>
        <el-table-column property="way" label="报名渠道" width="100"></el-table-column>
        <el-table-column property="status" label="交易状态" width="130"></el-table-column>
        <el-table-column property="note" label="备注" width="100" show-tooltip-when-overflow></el-table-column>
      </el-table>


      <el-row type="flex" align="middle" justify="end" style="padding: 20px 0;">
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
  /* 测试数据 */
const testData = [
  {
    name: 'Allen',
    tel: '18825144569',
    way: '祖传链接',
    status: '待支付',
    note: '喳喳'
  }, {
    name: 'Allen',
    tel: '13480278079',
    way: '祖传链接',
    status: '已关闭报名',
    note: '喳喳'
  }, {
    name: 'Allen',
    tel: '18825188888',
    way: '祖传链接',
    status: '已成功报名',
    note: '喳喳'
  }, {
    name: 'Allen',
    tel: '17070897917',
    way: '祖传链接',
    status: '退款中',
    note: '喳喳'
  }, {
    name: 'Allen',
    tel: '12414389677',
    way: '祖传链接',
    status: '待审核',
    note: '喳喳'
  }
];

  import debounce from 'lodash.debounce'
  export default {
    name: 'page2',
    data: function () {
      return {
        status:'全部',
        selectNum: 0,
        totalItemsNum:1000,
        searchText: '',
        sourceDate:[],
        tableData:[],
        multipleSelection: []
      }
    },
    computed:{

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
  .page2{min-width: 1200px;}
</style>
