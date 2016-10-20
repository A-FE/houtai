<template>
  <div class="step4">
    <el-steps :space="200" :active="4" class="step">
      <el-step title="活动信息" description=""></el-step>
      <el-step title="报名签到" description=""></el-step>
      <el-step title="分享设置" description=""></el-step>
      <el-step title="个性设置" description=""></el-step>
    </el-steps>

    <el-form label-position="top" :model="form" class="demo-form-stacked">
      <el-form-item label="消息推送">
          <el-row>
              <el-col :span="4">
                  <el-checkbox class="checkbox" v-model="form.signUpSuccess" checked>报名成功</el-checkbox>
              </el-col>
              <el-col :span="18">
                  <el-input
                    type="textarea"
                    placeholder="请输入内容"
                    :autosize="{minRows: 2, maxRows: 5}"
                    v-model="form.signUpSuccessText">
                  </el-input>
              </el-col>
          </el-row>
      </el-form-item>

      <el-form-item label="">
        <el-row>
          <el-col :span="4">
            <el-checkbox class="checkbox" v-model="form.auditSuccess" checked>审核通过</el-checkbox>
          </el-col>
          <el-col :span="18">
            <el-input
              type="textarea"
              placeholder="请输入内容"
              :autosize="{minRows: 2, maxRows: 5}"
              v-model="form.auditSuccessText">
            </el-input>
          </el-col>
        </el-row>
      </el-form-item>

      <el-form-item label="">
        <el-row>
          <el-col :span="4">
            <el-checkbox class="checkbox" v-model="form.auditFailed" checked>审核不通过</el-checkbox>
          </el-col>
          <el-col :span="18">
            <el-input
              type="textarea"
              placeholder="请输入内容"
              :autosize="{minRows: 2, maxRows: 5}"
              v-model="form.auditFailedText">
            </el-input>
          </el-col>
        </el-row>
      </el-form-item>

      <el-form-item label="">
        <el-row>
          <el-col :span="4">
            <el-checkbox class="checkbox" v-model="form.signInSuccess" checked>签到成功</el-checkbox>
          </el-col>
          <el-col :span="18">
            <el-input
              type="textarea"
              placeholder="请输入内容"
              :autosize="{minRows: 2, maxRows: 5}"
              v-model="form.signInSuccessText">
            </el-input>
          </el-col>
        </el-row>
      </el-form-item>

      <el-form-item label="">
        <el-row>
          <el-col :span="4">
            <el-checkbox class="checkbox" v-model="form.signInFailed" checked>签到失败</el-checkbox>
          </el-col>
          <el-col :span="18">
            <el-input
              type="textarea"
              placeholder="请输入内容"
              :autosize="{minRows: 2, maxRows: 5}"
              v-model="form.signInFailedText">
            </el-input>
          </el-col>
        </el-row>
      </el-form-item>

      <el-form-item label="">
        <el-row>
          <el-col :span="4">
            <el-checkbox class="checkbox" v-model="form.signInDouble" checked>重复签到</el-checkbox>
          </el-col>
          <el-col :span="18">
            <el-input
              type="textarea"
              placeholder="请输入内容"
              :autosize="{minRows: 2, maxRows: 5}"
              v-model="form.signInDoubleText">
            </el-input>
          </el-col>
        </el-row>
      </el-form-item>

      <el-form-item label="微信提醒">
          <el-row :gutter="20">
              <el-col :span="7">
                  <el-radio class="radio" v-model="form.remind" label="1" >不提醒</el-radio>
                  <el-radio class="radio" v-model="form.remind" label="2">提醒</el-radio>
              </el-col>
              <el-col :span="3">
                  <el-select v-model="form.remindTime">
                      <el-option
                        v-for="n of 24"
                        :value="n"></el-option>
                  </el-select>
              </el-col>
              <el-col :span="10">
                  <el-input placeholder="请填写您的微信提醒" size="" v-model="form.remindText"></el-input>
              </el-col>
          </el-row>
      </el-form-item>

      <el-form-item label="活动报名使用积分">
        <el-row>
          <div class="el-form-item__label"> 配置截屏分享图片</div>
          <el-col  class="el-form-item__label is-active" :span="4">
            <el-button type="text" @click.native="showMeg(1)">了解积分规则</el-button>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="7">
            <el-radio class="radio" v-model="form.useScore" label="1" >不使用</el-radio>
            <el-radio class="radio" v-model="form.useScore" label="2">使用</el-radio>
          </el-col>

          <el-col :span="7">
            <el-input placeholder="0" size="large" :number="true" v-model="form.useScoreNum"><template slot="append">积分</template></el-input>
          </el-col>
        </el-row>
      </el-form-item>

      <el-form-item label="活动报名获得积分">
        <el-row :gutter="20">
          <el-col :span="7">
            <el-radio class="radio" v-model="form.signUpScore" label="1" >无积分</el-radio>
            <el-radio class="radio" v-model="form.signUpScore" label="2">获得积分</el-radio>
          </el-col>

          <el-col :span="7">
            <el-input placeholder="0" size="large" :number="true" v-model="form.signUpScoreNum"><template slot="append">积分</template></el-input>
          </el-col>
        </el-row>
      </el-form-item>
      <el-form-item label="分享活动获得积分">
        <el-row :gutter="20">
          <el-col :span="7">
            <el-radio class="radio" v-model="form.shareScore" label="1" >无积分</el-radio>
            <el-radio class="radio" v-model="form.shareScore" label="2">获得积分</el-radio>
          </el-col>

          <el-col :span="7">
            <el-input placeholder="0" size="large" :number="true" v-model="form.shareScoreNum"><template slot="append">积分</template></el-input>
          </el-col>
        </el-row>
      </el-form-item>

      <el-form-item label="分享后每个阅读量获得积分">
        <el-row :gutter="20">
          <el-col :span="7">
            <el-radio class="radio" v-model="form.shareReadScore" label="1" >无积分</el-radio>
            <el-radio class="radio" v-model="form.shareReadScore" label="2">获得积分</el-radio>
          </el-col>

          <el-col :span="7">
            <el-input placeholder="0" size="large" :number="true" v-model="form.shareReadScoreNum"><template slot="append">积分</template></el-input>
          </el-col>
          <el-col :span="2" style="line-height: 42px;text-align: right;">
              上限
          </el-col>
          <el-col :span="7">
            <el-input placeholder="0" size="large" :number="true" v-model="form.shareReadScoreNumMax"><template slot="append">积分</template></el-input>
          </el-col>
        </el-row>
      </el-form-item>

      <el-form-item label="分享后好友报名获得积分">
        <el-row :gutter="20">
          <el-col :span="7">
            <el-radio class="radio" v-model="form.shareSignUp" label="1" checked>无积分</el-radio>
            <el-radio class="radio" v-model="form.shareSignUp" label="2">获得积分</el-radio>
          </el-col>

          <el-col :span="7">
            <el-input placeholder="0" size="large" :number="true" v-model="form.shareSignUpNum"><template slot="append">积分</template></el-input>
          </el-col>
          <el-col :span="2" style="line-height: 42px;text-align: right;">
            上限
          </el-col>
          <el-col :span="7">
            <el-input placeholder="0" size="large" :number="true" v-model="form.shareSignUpNumMax"><template slot="append">积分</template></el-input>
          </el-col>
        </el-row>
      </el-form-item>

      <el-form-item label="用户分享后，页面跳转至">
          <el-radio-group v-model="form.afterShare">
            <el-radio :label="1">不跳转</el-radio>
            <el-radio :label="2">图文库</el-radio>
            <el-radio :label="3">活动库</el-radio>
            <el-radio :label="4">问卷库</el-radio>
            <el-radio :label="5">试卷库</el-radio>
            <el-radio :label="6">大转盘</el-radio>
            <el-radio :label="7">砸金蛋</el-radio>
            <el-radio :label="8">自定义链接</el-radio>
          </el-radio-group>
      </el-form-item>

      <el-form-item label="用户分享后，页面跳转至">
        <el-radio-group v-model="form.afterSingUp">
          <el-radio :label="1">不跳转</el-radio>
          <el-radio :label="2">图文库</el-radio>
          <el-radio :label="3">活动库</el-radio>
          <el-radio :label="4">问卷库</el-radio>
          <el-radio :label="5">试卷库</el-radio>
          <el-radio :label="6">大转盘</el-radio>
          <el-radio :label="7">砸金蛋</el-radio>
          <el-radio :label="8">自定义链接</el-radio>
        </el-radio-group>
      </el-form-item>

      <el-form-item label="">
        <el-row>
           <div class="el-form-item__label"> 配置截屏分享图片</div>
          <el-col  class="el-form-item__label is-active" :span="4">
              <el-button type="text" @click.native="showMeg(2)">了解截屏分享图片</el-button>
          </el-col>
        </el-row>
        <el-radio-group v-model="form.shareImg">
          <el-radio :label="1">不配置</el-radio>
          <el-radio :label="2">配置</el-radio>
        </el-radio-group>
      </el-form-item>

      <el-form-item>
        <el-button><router-link to="/step3"  class="router-link">上一步</router-link></el-button>
        <el-button  type="primary"><router-link to=""  class="router-link">发布活动</router-link></el-button>
      </el-form-item>
    </el-form>

    <el-dialog title="提示" v-model="dialogVisible" size="tiny">
        <div v-html="DialogInnerHtml"></div>
        <span slot="footer" class="dialog-footer">
          <el-button @click.native="dialogVisible = false">取 消</el-button>
          <el-button type="primary" @click.native="dialogVisible = false">确 定</el-button>
        </span>
    </el-dialog>

  </div>
</template>
<script>

    const template1 = `<span style="font-size: 16px;line-height: 1.6em;">
          积分使用
          <br/>(1) 用户可以使用积分进行指定活动的报名优惠抵扣。
          <br/>(2) 单个积分可抵扣的相应的优惠值由活动方自己定义。例如：1个积分抵扣2元报名费。 <br/>
          <br/>积分获取:
          <br/>(1) 活动参与者通过分享活动，报名活动，或由分享后带来的好友阅读量，好友报名数等途径获得积分。
          <br/>(2) 一次活动获得的积分只对本次活动可用。</span>` ;
    const template2 =`<span>截屏分享图片</span>`;

    export default {
      name:'step4',
       data: function () {
         return {
           dialogVisible:false,
           DialogInnerHtml:template1,
           form:{
             signUpSuccess:true,       // 报名成功
             signUpSuccessText:'您已成功报名***(默认活动标题名)活动',
             auditSuccess:true,
             auditSuccessText:'您报名的***(默认活动标题名)活动，已审核通过',
             auditFailed:true,
             auditFailedText:'您报名的***(默认活动标题名)活动，审核不通过',
             signInSuccess:true,
             signInSuccessText:'***(默认用户名)您好！恭喜您签到成功！',
             signInFailed:true,
             signInFailedText:'抱歉，签到失败',
             signInDouble:true,
             signInDoubleText:'请勿重复签到！',
             remind:'',
             remindTime:'',
             remindText:'',
             useScore:'',
             useScoreNum:'',
             signUpScore:'',
             signUpScoreNum:'',
             shareScore:'',
             shareScoreNum:'',
             shareReadScore:'',
             shareReadScoreNum:'',
             shareReadScoreNumMax:'',
             shareSignUp:'',
             shareSignUpNum:'',
             shareSignUpNumMax:'',
             afterShare:'',
             afterSingUp:'',
             shareImg:'',
             shareImgUrl:''
           }
         }
       },
      methods: {
          showMeg: function (n) {
            this.dialogVisible = true;

            this.DialogInnerHtml = n == 1 ? template1 : template2;
          }
      }
    }
</script>
<style>
  .step4 .router-link{color:#333;}
  .step4 .el-button-primary .router-link{color:#fff;}
  .el-form-item .el-button+.el-button, .el-form-item .el-checkbox+.el-checkbox, .el-form-item .el-radio+.el-radio{margin-left: 30px;}
  .is-active{color: #20a0ff;cursor: pointer;}
</style>
