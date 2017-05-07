<template>
  <div class="allActive">
    <el-row class="head">
      <el-col :span="18" style="padding:20px 0;background: #33CCCC;">
        <el-col :span="8">
          {{ totalActiveNum }}<br>
          <span>活动总数</span>
        </el-col>
        <el-col :span="8">
          {{ totalActiveNum }}<br>
          <span>报名总数</span>
        </el-col>
        <el-col :span="8" style="border: none;">
          {{ auditNum }}<br>
          <span>待审核</span>
        </el-col>
      </el-col>

      <el-col :span="5" :offset="1" style="background:  #3091F2;padding:40px 0;">
        {{ totalActiveNum }}<br>
        <span>查看会员</span>
      </el-col>
    </el-row>

    <el-card class="box-card">
      <h3>活动列表</h3>
      <el-row type="flex" align="middle" :gutter="20" style="padding:20px 0;">
        <el-col :span="5" style="width: 160px;text-align: center;">
          已选择{{ activeNum }}个活动
        </el-col>
        <el-col :span="5" style="width: 140px;">
          <el-select v-model="currentType" placeholder="请选择活动分类">
            <el-option
              v-for="type in types"
              :value="type">
            </el-option>
          </el-select>
        </el-col>
        <el-col :span="13">
          <!--<el-button :plain="true" type="info">设置活动分类</el-button>-->
          <el-button :plain="true" @click.native="handleRemove" type="danger">删除</el-button>
          <el-button :plain="true" @click.native="handleMoveToTop" type="info">置顶</el-button>
          <el-button :plain="true" @click.native="handleCopy" type="info">复制</el-button>
        </el-col>
      </el-row>

      <el-table :data="filteredTableData"  style="width: 100%"
                @cell-click="handleSelect" @selection-change="selectionchange"
                >
        <el-table-column type="selection" width="50"></el-table-column>
        <el-table-column property="title" label="活动名称"></el-table-column>
        <el-table-column property="type" label="活动分类" ></el-table-column>
        <el-table-column property="status" label="活动状态"></el-table-column>
        <el-table-column property="readNum" label="浏览数"></el-table-column>
        <el-table-column property="signUpNum" label="报名数"></el-table-column>
        <el-table-column property="auditNum" label="待审核"></el-table-column>
        <el-table-column inline-template label="操作" align="center" property="id">
          <el-button type="text" size="mini" @click.native="">查看详情</el-button>
        </el-table-column>
      </el-table>

      <el-row type="flex" justify="end" style="padding:20px 0; ">
        <el-pagination
          :current-page="5"
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
    name: 'allActive',
    data: function () {
      return {
        totalActiveNum: 3,
        totalSignUp: 204,
        auditNum: 15,
        activeNum: 0,
        currentType: '全部',
        selectItems:[],
        types: ['全部','测试活动','免费活动','收费活动'],
        tableData: [
          {
            id: '001',
            title: '王小虎',
            type: '测试活动',
            status: '已结束',
            readNum: 200,
            signUpNum: 100,
            auditNum: 100
          }, {
            id: '002',
            title: '王小虎',
            type: '测试活动',
            status: '已结束',
            readNum: 200,
            signUpNum: 100,
            auditNum: 100
          }, {
            id: '003',
            title: '王小虎',
            type: '测试活动',
            status: '已结束',
            readNum: 200,
            signUpNum: 100,
            auditNum: 100
          }, {
            id: '004',
            title: '王小虎',
            type: '测试活动',
            status: '已结束',
            readNum: 200,
            signUpNum: 100,
            auditNum: 100
          }],
      }
    },
    computed:{
        filteredTableData: function () {
          var type = this.currentType;
          return this.tableData.filter(function (data) {
            if(type == '全部'|| type == '' ){
              return true
            }else{
              return data.type == type
            }
          })
        }
    },
    methods: {
      handleSelect: function (row, column, cell, event) {
       if (column.label == '操作') {
         this.$router.push('/activeManage/detail/page1');
        } else if(column.type == 'selection'){
            row.$info = !row.$selected;
       }else{
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
        this.activeNum = this.selectItems.length;
      },
      handleRemove:function(){
        var tableData = this.tableData;
        this.selectItems.forEach(function (id) {
          tableData.forEach(function (data) {
              if(id == data.id){
                tableData.splice(tableData.indexOf(data),1)
              }
          })
        });
        this.selectItems = [];
      },
    }
  }
</script>
<style>
  .allActive > .head > .el-col > .el-col {
    padding: 20px 0;
    border-right: solid 1px #fff;
  }

  .allActive .head {
    text-align: center;
    color: #fff;
    font-size: 30px;
    margin-bottom: 50px;
  }

  .allActive .head span {
    font-size: 16px;
  }
</style>
