<template>
  <div class="step3">
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
