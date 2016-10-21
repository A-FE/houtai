<template>
  <div class="step2">

    <el-form ref="form" :model="form" label-position="top" @submit.prevent="onSubmit">

      <el-form-item label="报名限制" prop="">
          <el-radio-group v-model="form.joinLimit">
              <el-radio :label="1">无限制</el-radio>
              <el-radio :label="2">必须关注公众号才能报名</el-radio>
              <el-radio :label="3">必须成为会员才能报名</el-radio>
              <el-radio :label="4">必须分享才能报名</el-radio>
          </el-radio-group>
        </el-form-item>

      <el-form-item label="每人可报名额限制" prop="">
        <el-row>
          <el-col :span="6">
            <el-radio class="radio" v-model="form.numLimit" label="1">无限制</el-radio>
            <el-radio class="radio" v-model="form.numLimit" label="2">限制</el-radio>
          </el-col>
          <el-col :span="6">
            <el-input placeholder="0" :number="true" size="large" v-model="form.numLimitDetail"><template slot="append">人</template></el-input>
          </el-col>
        </el-row>
      </el-form-item>

      <el-form-item label="付费活动" prop="">
        <el-row>
          <el-col :span="6">
            <el-radio class="radio" v-model="form.cost" label="1">免费</el-radio>
            <el-radio class="radio" v-model="form.cost" label="2">费用</el-radio>
          </el-col>
          <el-col :span="6">
            <el-input placeholder="0" :number="true" size="large" v-model="form.costDetail"><template slot="append">元</template></el-input>
          </el-col>
        </el-row>
      </el-form-item>

      <el-form-item label="允许取消报名" prop="">
        <el-row>
          <el-col :span="6">
            <el-radio class="radio" v-model="form.cancel" label="1">不允许</el-radio>
            <el-radio class="radio" v-model="form.cancel" label="2">允许</el-radio>
          </el-col>
          <el-col :span="6">
            <el-input placeholder="活动前几小时"  size="large" v-model="form.costDetail"><template slot="append">小时</template></el-input>
          </el-col>
        </el-row>
      </el-form-item>

      <el-form-item label="报名是否需要审核" prop="">
        <el-row>
          <el-col :span="6">
            <el-radio class="radio" v-model="form.audit" label="1">不需要</el-radio>
            <el-radio class="radio" v-model="form.audit" label="2">需要</el-radio>
          </el-col>
        </el-row>
      </el-form-item>

      <el-form-item label="设置报名表" prop="" class="setSign">
            <el-row :gutter="20">
                <el-col :span="2">
                  <el-checkbox class="checkbox" v-model="form.needName" checked>必填</el-checkbox>
                </el-col>
                <el-col :span="2" class="title">姓名</el-col>
                <el-col :span="10">
                      <el-input v-model="form.name"  placeholder="请输入您的姓名" size="large"></el-input>
                </el-col>
                <el-button icon="delete" @click.native.prevent="" title="删除"></el-button>
                <el-button @click.native.prevent="" title="删除">移动</el-button>
            </el-row>
            <el-row :gutter="20">
              <el-col :span="2">
                <el-checkbox class="checkbox" v-model="form.needTel" checked>必填</el-checkbox>
              </el-col>
              <el-col :span="2" class="title">手机</el-col>
              <el-col :span="10">
                  <el-input v-model="form.tel"  placeholder="请输入您的手机号" size="large"></el-input>
              </el-col>
              <el-button icon="delete" @click.native.prevent="" title="删除"></el-button>
              <el-button @click.native.prevent="" >移动</el-button>
            </el-row>
            <el-row>
                <el-col :span="14" :offset="5">
                    <el-button :span="24" type="primary" size="large">添加更多</el-button>
                </el-col>
            </el-row>
      </el-form-item>

      <el-form-item label="签到条件" prop="">
        <el-row>
          <el-col :span="24">
            <el-radio class="radio" v-model="form.sign" label="1">必须报名</el-radio>
            <el-radio class="radio" v-model="form.sign" label="2">不需要报名</el-radio>
          </el-col>
        </el-row>
      </el-form-item>

      <el-form-item label="签到方式" prop="">
        <el-row>
          <el-col :span="16">
            <el-radio-group v-model="form.signType">
              <el-radio :label="1">签到二维码</el-radio>
              <el-radio :label="2">入场二维码</el-radio>
              <el-radio :label="3">会员二位码</el-radio>
              <el-radio :label="4">手机号</el-radio>
              <el-radio :label="5">暗号</el-radio>
            </el-radio-group>
          </el-col>
          <el-col :span="5" :pull="2">
              <el-input v-model="form.secretCode"  placeholder="请填写您的暗号"  size="large"></el-input>
          </el-col>
        </el-row>
      </el-form-item>

      <el-form-item label="生成签到二维码">
          <el-col :span="4">
              <img width="100" height="100" :src="imgUrl">
          </el-col>

          <el-col :span="4">
              <el-button>生成</el-button>
          </el-col>
      </el-form-item>


    </el-form>
  </div>
</template>
<script>
  export default {
    name:'step2',
    data: function (){
    return {
      imgUrl:'',
      form: {
          joinLimit:1,
          numLimit:1,
          numLimitDetail:'',
          cost:'1',
          costDetail:'',
          cancel: 1,
          audit: 1,
          needName: true,
          name:'',
          needTel: true,
          tel: '',
          sign: '1',
          signType: '',
          secretCode: ''
      }
    }
  },
  methods: {
    onSubmit: function (){
      console.log('submit!');
    }
  }
  }
</script>
<style>
  .step2 .setSign .el-row{line-height: 40px;margin-bottom: 10px;}
  .step2 .title{text-align: right;}
  .step2 .router-link{color:#333;}
  .step2 .el-button-primary .router-link{color:#fff;}
</style>
