<!-- 地址选择组件 -->
<template>

  <el-row :gutter="20">
      <el-col :span="5">
        <el-select v-model="province" placeholder="请输入省">
          <el-option
            v-for="item in provinces"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </el-col>

    <el-col :span="5">
      <el-select v-model="city" placeholder="请输入市">
        <el-option
          v-for="item in citys"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
    </el-col>

    <el-col :span="12">
      <el-input
        placeholder="请填写详细地址"
        :number="true"
        v-model="detail">
      </el-input>
    </el-col>
  </el-row>

</template>
<script>
  import addressData from '../assets/js/addressData.js'

  function formatData(data){
    var result = [];
    for(var key in data){
      result.push({
        value: key ,
        label: key
      })
    }
    return result
  }

  export default {
    name:'address',
    data: function () {
      return {
        province: '',
        city: '',
        detail: ''
      }
    },
    computed: {
      provinces: function (){
        return formatData(addressData)
      },
      citys: function (){
        return formatData(addressData[this.province])
      }
    },
    watch: {
      'province': function (newval,oldval){
        this.$nextTick(function () {
          console.log(newval)
          this.citys = formatData(addressData[newval]);
        })
      },
      'citys': function (){
          this.city = "";
          console.log('更新city')
      }
    },
    methods: {
      initAddress: function (pro,citys,detail){
//        this.citys = formatData(addressData[pro]);
//        this.detail = "";
      }
    },
    ready: function (){
//      this.initAddress(this.province)
    }

  }
</script>
