<template>
  <div class="fillcontain">
    <headTop></headTop>
    <el-form ref="formData" :label-position="labelPosition"  :rules="rules" :model="formData" label-width="100px">
      <div class="fromSystem">
        <el-form-item label="顾问ID">
          <el-input v-model="formData.conid"></el-input>
        </el-form-item>
        <el-form-item label="经纪人类型">
          <el-select v-model="formData.constype" placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="注册方式">
          <el-input v-model="formData.regtype"></el-input>
        </el-form-item>
        <el-form-item label="所属公司ID">
          <el-input v-model="formData.compyid"></el-input>
        </el-form-item>
        <el-form-item label="所属公司名称">
          <el-input v-model="formData.compyname"></el-input>
        </el-form-item>
        <el-form-item label="登录帐号">
          <el-input v-model="formData.loginid"></el-input>
        </el-form-item>
        <el-form-item label="银行账号">
          <el-input v-model="formData.deposit"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('formData')">提交</el-button>
        </el-form-item>
      </div>
    </el-form>
  </div>
</template>

<script>
import headTop from '@/components/headTop'
let vm;
export default {
  data() {
    return {
      formData: {
        conid: "",
        constype: "",
        compyid: "",
        compyname: "",
        loginid: "",
        deposit: "",
      },
      options: [{
        value: "1",
        label: "企业注册"
      },{
        value: "2",
        label: "企业员工"
      },{
        value: "3",
        label: "独立经纪"
      }],
      labelPosition: "right",
      rules: {}
    }
  },
  mounted(){
    vm = this;
    console.log(this.$route.params);
  },
  components: {
    headTop
  },
  methods: {
    submitForm() {

    }
  }
}
</script>

<style lang="css">
</style>
