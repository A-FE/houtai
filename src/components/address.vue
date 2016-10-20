<!-- 地址选择组件 -->
<template>

  <el-row :gutter="20">
      <el-col :span="5">
        <el-select v-model="province" placeholder="请输入省" @change="proChange" filterable>
          <el-option
            v-for="item in provinces"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </el-col>

    <el-col :span="5">
      <el-select v-model="city" placeholder="请输入市" @change="cityChange" filterable>
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
        detail: '',
        provinces: formatData(addressData)
      }
    },
    computed: {
      citys: function (){
        console.log('计算citys');
        return formatData(addressData[this.province])
      }
    },
    watch: {
      citys: function (val, oldval) {
        console.log('citys变化了');
      },
      city: function (val) {
        console.log('city变化了'+val);
      }
    },
    methods: {
      proChange: function (val) {
      },
      cityChange: function (val) {
      }
      }
    }
</script>
