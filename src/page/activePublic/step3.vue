<template>
  <div class="step3">

    <el-steps :space="200" :active="3" class="step">
      <el-step title="活动信息" description=""></el-step>
      <el-step title="报名签到" description=""></el-step>
      <el-step title="分享设置" description=""></el-step>
      <el-step title="个性设置" description=""></el-step>
    </el-steps>

    <el-form label-position="top" :model="form" class="demo-form-stacked">
      <el-form-item label="分享标题">
        <el-input v-model="form.title"></el-input>
      </el-form-item>
      <el-form-item label="分享描述">
        <el-input v-model="form.describe"></el-input>
      </el-form-item>
      <el-form-item label="分享图片">
        <el-upload
          action="http://jsonplaceholder.typicode.com/"
          type="drag"
          :thumbnail-mode="true"
          :on-preview="handlePreview"
          :on-remove="handleRemove"
          >
          <i class="el-icon-upload"></i>
          <div class="el-dragger__text">将文件拖到此处，或<em>点击上传</em></div>
          <div class="el-upload__tip" slot="tip">图片尺寸建议比例1:1,如160*160像素，图片不能大于2M</div>
        </el-upload>
      </el-form-item>

      <el-form-item>
        <el-button><router-link to="/step2"  class="router-link" style="color: #333;">上一步</router-link></el-button>
        <el-button  type="primary"><router-link to="/step4"  class="router-link">下一步</router-link></el-button>
      </el-form-item>
    </el-form>
  </div>
  </template>

<script>
  export default {
    name:'step3',
    data: function () {
      return {
        form: {
          title: '',
          describe: ''
        }
      }
    },
    methods: {
      handleRemove: function (file, fileList) {
        console.log(file, fileList);
      },
      handlePreview: function (file) {
        console.log(file);
      }
    }
  }
</script>
<style>
  .step3 .router-link{color:#333;}
  .step3 .el-button-primary .router-link{color:#fff;}
</style>
