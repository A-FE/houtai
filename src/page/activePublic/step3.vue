<template>
  <div class="step3">
    <el-form label-position="top" ref="shareForm" :model="shareForm" class="demo-form-stacked">

      <el-form-item label="分享标题">
        <el-input v-model="shareForm.title"></el-input>
      </el-form-item>

      <el-form-item label="分享描述">
        <el-input v-model="shareForm.describe"></el-input>
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
    import store from 'src/store.js'

    export default {
        name: 'step3',
        data: function () {
            return {
                shareForm: {
                    title: '',
                    describe: ''
                }
            }
        },
        watch: {
            shareForm: {
                handler: function () {
                    store.commit('setShareForm', this.shareForm);
                } ,
                deep:true
            }
        },
        methods: {
            handleRemove: function (file, fileList) {
                console.log(file, fileList);
            },
            handlePreview: function (file) {
                console.log(file);
            }
        },
        created: function () {
            store.state.shareForm && Object.assign(this.shareForm, store.state.shareForm);
        }
    }
</script>
<style>
  .step3 .router-link{color:#333;}
  .step3 .el-button-primary .router-link{color:#fff;}
</style>
