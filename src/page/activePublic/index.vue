<template>
    <div class="activePublic">
      <el-steps :space="200" :active="step" class="step">
        <el-step title="活动信息" description=""></el-step>
        <el-step title="报名签到" description=""></el-step>
        <el-step title="分享设置" description=""></el-step>
        <el-step title="个性设置" description=""></el-step>
      </el-steps>

        <router-view class="view"></router-view>

      <div class="but-group">
      <el-button @click.native.prevent="handlePreview"  v-show="preview">预览</el-button>
      <el-button @click.native.prevent="handlePreStep"  v-show="preStep">上一步</el-button>
      <el-button @click.native.prevent="handleNextStep" v-show="nextStep" type="primary">下一步</el-button>
      <el-button @click.native.prevent="handlePublish"  v-show="publish" type="primary">发布活动</el-button>
      </div>
    </div>
</template>

  <script>
    import store from 'src/store.js'
    import $ from 'jquery'

    export default {
    name:'activePublic',
    data: function () {
      return {
        preview: true,
        preStep: false,
        nextStep: true,
        publish: false,
        step: 1
      }
    },
    methods: {
      handlePreview: function () {
        console.log('预览');
      },
      handlePreStep: function () {
        this.step--;
        this.goStep(this.step);
        this.$router.go(-1);
        $(window).scrollTop(0);
      },
      handleNextStep: function () {
        this.step++;
        this.goStep(this.step);
        this.$router.push('/activePublic/step'+this.step);
        $(window).scrollTop(0);
        console.log("下一步",store.state.ruleForm)
      },
      handlePublish: function () {
        console.log('发布');
      },
      goStep: function (n) {
        switch (n) {
          case 1 :
            this.preview = true;this.preStep = false;this.nextStep = true;this.publish = false;
            break;
          case 2 :
            this.preview = false;this.preStep = true;this.nextStep = true;this.publish = false;
            break;
          case 3 :
            this.preview = false;this.preStep = true;this.nextStep = true;this.publish = false;
            break;
          case 4 :
            this.preview = false;this.preStep = true;this.nextStep = false;this.publish = true;
            break;
        }
      }
    },
    watch:{

    }
  }

</script>
<style>
 .activePublic .router-link{color:#fff;}
 .activePublic .but-group .el-button{margin-right: 20px;}
</style>
