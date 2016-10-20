<template>
    <div class="step1">
      <el-steps :space="200" :active="1" class="step">
        <el-step title="活动信息" description=""></el-step>
        <el-step title="报名签到" description=""></el-step>
        <el-step title="分享设置" description=""></el-step>
        <el-step title="个性设置" description=""></el-step>
      </el-steps>



      <el-form :model="ruleForm" class="demo-ruleForm demo-form-stacked" :rules="rules" ref="ruleForm"  label-position="top">
        <el-form-item label="活动名称" prop="name">
          <el-input v-model="ruleForm.name" size="large"></el-input>
        </el-form-item>

        <el-form-item label="活动分类" prop="fenlei">
          <el-radio-group v-model="ruleForm.fenlei">
            <el-radio label="未发布"></el-radio>
            <el-radio label="测试活动"></el-radio>
            <el-radio label="精彩活动"></el-radio>
          </el-radio-group>
        </el-form-item>

        <el-form-item label="活动标签" prop="tagsArr">
            <el-tag
              v-for="tag in tags"
              :closable="true"
              type="primary"
              :close-transition="false"
              @close="handleClose(tag)"
              >
              {{tag.name}}
            </el-tag>
          <el-button icon="plus" size="large" @click.native="showDialog"></el-button>
        </el-form-item>

        <el-form-item label="活动时间" prop="activeTime">
          <div class="block">
            <el-date-picker v-model="activeStartTime" type="datetime" placeholder="选择日期时间"></el-date-picker>
            至
            <el-date-picker v-model="activeEndTime" type="datetime" placeholder="选择日期时间"></el-date-picker>
          </div>
        </el-form-item>

        <el-form-item label="报名时间" prop="signTime">
          <div class="block">
            <el-date-picker v-model="signStartTime" type="datetime" placeholder="选择日期时间"></el-date-picker>
            至
            <el-date-picker v-model="signEndTime" type="datetime" placeholder="选择日期时间"></el-date-picker>
          </div>
        </el-form-item>


        <el-form-item label="活动地点" prop="">
            <address-select></address-select>
        </el-form-item>

        <el-form-item label="活动人数" prop="">
          <el-row>
          <el-col :span="6">
            <el-radio class="radio" v-model="radio" label="1">无限制</el-radio>
            <el-radio class="radio" v-model="radio" label="2">限制</el-radio>
          </el-col>
          <el-col :span="6">
            <el-input placeholder="0" :number="true" size="large" v-model="input"><template slot="append">人</template></el-input>
          </el-col>
          </el-row>
        </el-form-item>

        <el-form-item label="活动封面" prop="">
          <el-upload action="http://jsonplaceholder.typicode.com/" type="drag" :multiple="true" :on-preview="handlePreview" :on-remove="handleRemove" :on-success="handleSuccess" :on-error="handleError">
            <i class="el-icon-upload"></i>
            <div class="el-dragger__text">将文件拖到此处，或<em>点击上传</em></div>
            <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过2M</div>
          </el-upload>
        </el-form-item>

        <el-form-item label="活动简介" prop="">
            <el-input
              type="textarea"
              placeholder="请输入内容"
              :autosize="{minRows: 4, maxRows: 8}"
              v-model="textarea">
            </el-input>
        </el-form-item>

        <el-form-item label="报名用户信息展示" prop="">
          <el-radio-group v-model="radio2">
            <el-radio :label="1">不展示</el-radio>
            <el-radio :label="2">展示报名人数</el-radio>
            <el-radio :label="3">展示报名清单</el-radio>
            <el-radio :label="4">报名成功显示完整用户资料</el-radio>
          </el-radio-group>
        </el-form-item>

        <el-form-item label="评价功能" prop="">
          <el-radio-group v-model="radio3">
            <el-radio :label="1">不开启</el-radio>
            <el-radio :label="2">实时评价</el-radio>
            <el-radio :label="3">审核后评论</el-radio>
          </el-radio-group>
        </el-form-item>

        <el-form-item label="赞助广告" prop="">
          <el-upload action="http://jsonplaceholder.typicode.com/" type="drag" :multiple="true" :on-preview="handlePreview" :on-remove="handleRemove" :on-success="handleSuccess" :on-error="handleError">
            <i class="el-icon-upload"></i>
            <div class="el-dragger__text">将文件拖到此处，或<em>点击上传</em></div>
            <div class="el-upload__tip" slot="tip">图片尺寸建议比例1；4.18，如160*666像素，且不超过2M</div>
          </el-upload>
        </el-form-item>

        <el-form-item>
          <el-input
            placeholder="请填写您的广告标题"
            size="large"
            v-model="input1">
          </el-input>
        </el-form-item>

        <el-form-item>
        <el-input
            placeholder="请填写您的广告内容"
            size="large"
            v-model="input2">
          </el-input>
        </el-form-item>
        <el-form-item>

          <el-input
            placeholder="请填写您的赞助链接"
            size="large"
            v-model="input3">
          </el-input>
        </el-form-item>


        <el-form-item>
          <el-button @click.native.prevent>预览</el-button>
          <el-button type="primary"><router-link to="/step2"  class="router-link">下一步</router-link></el-button>
        </el-form-item>
      </el-form>

      <!-- 弹框 -->
      <el-dialog title="添加活动标签" v-model="dialogFormVisible" top="35%">
        <el-form :model="form">
          <el-form-item>
            <el-input v-model="form.name" auto-complete="off"></el-input>
          </el-form-item>
        </el-form>
                <span slot="footer" class="dialog-footer">
                    <el-button @click.native="dialogFormVisible = false">取 消</el-button>
                    <el-button type="primary" @click.native="handleAdd">添加</el-button>
                </span>
      </el-dialog>
    </div>
</template>
<script>
  import addressSelect from 'src/components/address.vue'
  export default {
    name:'step1',
    components: {
      'address-select' : addressSelect
    },
    data: function () {
      return {
        province:'广东省',
        city:'广州市',
        detail:'',
        activeStartTime: '',
        activeEndTime: '',
        signStartTime: '',
        signEndTime: '',
        radio: '',
        radio2: '',
        radio3: '',
        input: '',
        input1: '',
        input2: '',
        input3: '',
        textarea: '',
        dialogFormVisible: false,
        form: {
          name: '',
        },
        ruleForm: {
          name: '',
          fenlei: '',
          tagsArr: [],
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          desc: ''
        },
        rules: {
          name: [
            {required: true, message: '请输入活动名称', trigger: 'blur'}
          ],
          fenlei: [
            {required: true, message: '请选择活动分类', trigger: 'change'}
          ],
          tagsArr: [
            {required: true, message: '最多设置5个标签', trigger: ''}
          ],
          region: [
            {required: true, message: '请选择活动区域', trigger: 'change'}
          ],
          date1: [
            {type: 'date', required: true, message: '请选择日期', trigger: 'change'}
          ],
          date2: [
            {type: 'date', required: true, message: '请选择时间', trigger: 'change'}
          ],
          type: [
            {type: 'array', required: true, message: '请至少选择一个活动性质', trigger: 'change'}
          ],

          desc: [
            {required: true, message: '请填写活动形式', trigger: 'blur'}
          ]
        },
        tags: [
          { name: '标签一'},
          { name: '标签二'},
          { name: '标签三'},
          { name: '标签四'},
          { name: '标签五'}
        ]
      };
    },
    methods: {
      handleReset: function () {
        this.$refs.ruleForm.resetFields();
      },
      handleSubmit: function (ev) {
        this.$refs.ruleForm.validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        })
      },
      handleRemove: function (file, fileList) {
        console.log(file, fileList);
      },
      handlePreview: function (file) {
        console.log(file);
      },
      handleSuccess: function () {
      },
      handleError: function () {
      },
      showDialog: function () {
        if(this.tags.length >=5 ){
          console.log('最多设置5个活动标签');
        }else{
          this.dialogFormVisible = true;
        }
      },
      handleClose: function (tag) {
        var index = this.tags.indexOf(tag);
        this.tags.splice(0,1);
      },
      handleAdd: function () {
        this.dialogFormVisible = false;
        this.tags.push({
          name: this.form.name
        });
      }
    }
  }
</script>
<style>
    .step{margin-bottom: 30px;}
    .step1 .demo-ruleForm .el-form-item{margin-bottom: 35px;margin-right: 50px;}

    .step1 .el-form-item.is-required .el-form-item__label:after {
      content: '*';
      color: #ff4949;
      margin-right: 4px;
    }
    .step1 .el-form-item.is-required .el-form-item__label:before { display: none; }
    /* 标签 */
    .step1 .demo-ruleForm  .el-tag{padding: 10px 15px;margin:10px;vertical-align: middle;}
    .step1 .demo-ruleForm  .el-tag:first-child{margin-left: 0;}
    .step1 .demo-ruleForm  .el-button{vertical-align: middle;margin: 10px;}

    /* 对话框 */
    .step1 .el-dialog__body{padding-bottom: 0;}
    .step1 .el-dialog__body .el-form-item{margin-bottom: 10px;}

   /* 时间选择器 */
    .step1 .el-date-editor, .el-date-editor__editor, .el-time-panel__footer{height: 44px;}
    .step1 .el-date-editor__trigger.el-icon{width:20px;height:20px;line-height: 44px;}

    .step1 .el-input-group__append, .el-input-group__prepend{background:none;border-left: 0; color: #333; }

    .step1 .el-form-item .router-link{color:#fff;}
</style>
