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
        <el-col :span="5">
          已选择{{ activeNum }}个活动
        </el-col>
        <el-col :span="6">
          <el-select v-model="selectActive" placeholder="请选择活动分类">
            <el-option
              v-for="item in options"
              :value="item.value">
            </el-option>
          </el-select>
        </el-col>
        <el-col :span="13">
          <el-button :plain="true" type="info">设置活动分类</el-button>
          <el-button :plain="true" type="danger">删除</el-button>
          <el-button :plain="true" type="info">置顶</el-button>
          <el-button :plain="true" type="info">复制</el-button>
        </el-col>
      </el-row>

      <el-table :data="tableData" selection-mode="multiple" style="width: 100%" @selectionchange="" @cellclick="handleSelect" :custom-criteria="['$info', '$positive']" :custom-background-colors="['#C9E5F5', '#E2F0E4']">
        <el-table-column type="selection" width="50"></el-table-column>
        <el-table-column property="title"  label="活动名称" ></el-table-column>
        <el-table-column property="type" label="活动分类"></el-table-column>
        <el-table-column property="status" label="活动状态"></el-table-column>
        <el-table-column property="readNum" label="浏览数"></el-table-column>
        <el-table-column property="signUpNum" label="报名数"></el-table-column>
        <el-table-column property="auditNum" label="待审核"></el-table-column>
        <el-table-column inline-template label="操作" align="center">
            <el-button type="text" size="mini">查看详情</el-button>
        </el-table-column>
      </el-table>

      <el-row type="flex" justify="end" style="padding:20px 0; ">
          <el-pagination
            @sizechange=""
            @currentchange=""
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
          auditNum:15,
          activeNum: 0,
        selectActive: '',
        options: [{
          value: '测试活动'
        },
          {
            value: '**活动'
          }],
        tableData: [{
          title: '王小虎',
          type:'测试活动',
          status:'已结束',
          readNum:200,
          signUpNum:100,
          auditNum:100
        },{
          title: '王小虎',
          type:'测试活动',
          status:'已结束',
          readNum:200,
          signUpNum:100,
          auditNum:100
        },{
          title: '王小虎',
          type:'测试活动',
          status:'已结束',
          readNum:200,
          signUpNum:100,
          auditNum:100
        },{
          title: '王小虎',
          type:'测试活动',
          status:'已结束',
          readNum:200,
          signUpNum:100,
          auditNum:100
        }],
        multipleSelection: [],
        multiple:[]
      }
    },
    methods: {
      handleSelect: function (row, column, cell, event){
        if(column.label != '操作'){
          row.$selected = !row.$selected;
          row.$info = !row.$info;
        }else{
          this.$router.push('/activeManage/detail/page1');
        }
      }

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
