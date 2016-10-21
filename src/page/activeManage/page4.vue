<template>
<<<<<<< HEAD
  <div class="page4">
    <p style="font-size: 15px;">数据统计时间: 活动发布时间 {{ activePublishTime }} ——至今</p>
    <el-row type="flex" align="middle">
        <el-col :span="3">
            <h4>数据总览</h4>
        </el-col>
        <el-col :span="20">
            <el-button type="text">数据指标说明</el-button>
        </el-col>
    </el-row>

    <el-row type="flex" justify="space-around">
      <el-col :span="3">
        <div class="square">
          {{ readNum }}
          <p>浏览次数</p>
        </div>
      </el-col>
      <el-col :span="3">
        <div class="square">
          {{ readPersonNum }}
          <p>浏览用户数</p>
        </div>
      </el-col>
      <el-col :span="3">
        <div class="square">
          {{ signUpNum }}
          <p>报名人数</p>
        </div>
      </el-col>
      <el-col :span="3">
        <div class="square">
          {{ translateRate }}
          <p>报名转化率</p>
        </div>
      </el-col>
      <el-col :span="3">
        <div class="square">
          {{ signInNum }}
          <p>签到人数</p>
        </div>
      </el-col>
    </el-row>

    <el-row type="flex" align="middle">
      <el-col :span="24">
        <h4>数据趋势</h4>
      </el-col>
    </el-row>
      <!-- 折现图 -->

    <el-row type="flex" align="middle">
      <el-col :span="24">
        <h4>渠道监控</h4>
      </el-col>
    </el-row>
    <!-- 柱状图 -->

    <el-row type="flex" align="middle">
      <el-col :span="24">
        <h4>渠道监控详情</h4>
      </el-col>
    </el-row>

    <el-row>
      <el-table :data="tableData" border style="width: 100%">
        <el-table-column property="way"         label="渠道"       width="180"></el-table-column>
        <el-table-column property="readNum"     label="浏览用户数" width="180" sortable></el-table-column>
        <el-table-column property="forwardNum"  label="转发次数" sortable></el-table-column>
        <el-table-column property="signUpNum"   label="报名人数" sortable></el-table-column>
      </el-table>
    </el-row>
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

    <el-row type="flex" align="middle">
      <el-col :span="24">
        <h4>用户影响力监控</h4>
      </el-col>
    </el-row>

    <el-row>
      <el-table :data="tableData1" border style="width: 100%">
        <el-table-column property="name"        label="姓名"></el-table-column>
        <el-table-column property="tel"         label="手机"></el-table-column>
        <el-table-column property="way"         label="渠道"></el-table-column>
        <el-table-column property="forwardNum"  label="转发次数" sortable></el-table-column>
        <el-table-column property="readNum"     label="浏览用户数" sortable></el-table-column>
        <el-table-column property="signUpNum"   label="报名人数" sortable></el-table-column>
      </el-table>
    </el-row>
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


=======
  <div class="page1">
    数据统计
>>>>>>> origin/master
  </div>
</template>

<script>

  export default {
    name:'page4',
    data: function () {
      return {
<<<<<<< HEAD
        activePublishTime:'2016-09-12',
        readNum: 1000,
        readPersonNum: 300,
        signUpNum: 100,
        translateRate: '10%',
        signInNum:88,
        tableData: [{
          way: '渠道一',
          readNum: 1500,
          forwardNum: 5000,
          signUpNum: 88
        }, {
          way: '渠道二',
          readNum: 2500,
          forwardNum: 4000,
          signUpNum: 99
        },
          {
            way: '渠道三',
            readNum: 3500,
            forwardNum: 3000,
            signUpNum: 23
          },
          {
            way: '渠道四',
            readNum: 4500,
            forwardNum: 2000,
            signUpNum: 55
          },
          {
            way: '渠道五',
            readNum: 5500,
            forwardNum: 1000,
            signUpNum: 123
          }],
        tableData1: [{
          name: 'Aleen',
          tel: '18825144569',
          way: '渠道一',
          forwardNum: 1000,
          readNum: 800,
          signUpNum: 88
        }, {
          name: 'Aleen',
          tel: '18825144569',
          way: '渠道一',
          forwardNum: 1000,
          readNum: 800,
          signUpNum: 88
        }, {
          name: 'Aleen',
          tel: '18825144569',
          way: '渠道一',
          forwardNum: 1000,
          readNum: 800,
          signUpNum: 88
        }, {
          name: 'Aleen',
          tel: '18825144569',
          way: '渠道一',
          forwardNum: 1000,
          readNum: 800,
          signUpNum: 88
        }, {
          name: 'Aleen',
          tel: '18825144569',
          way: '渠道一',
          forwardNum: 1000,
          readNum: 800,
          signUpNum: 88
        }]
      }
    },
    computed: {
      currentTime: function () {
        var date = new Date();
        var y = date.getFullYear();
        var m = date.getMonth()+1;
        var d = date.getDate();
        var h = date.getHours();
        var mm = date.getMinutes();
        return y+'-'+m+'-'+d+' '+h+':'+mm ;
      }

    },

    methods: {

    },
    watch: {
=======

      }
    },
    methods: function () {

    },
    watch: function () {
>>>>>>> origin/master

    }
  }

<<<<<<< HEAD

</script>

<style>
  .square{width: 140px;height: 140px; border: solid 1px #20a0ff; text-align: center;border-radius: 6px;padding: 40px 0;box-sizing: border-box;}
  .square p{color: #999;}
=======
</script>

<style>

>>>>>>> origin/master
</style>
