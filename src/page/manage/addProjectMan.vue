<template>
  <div class="fillcontain">
    <headTop></headTop>
    <div class="fromSystem">
      <el-form ref="formData" :label-position="labelPosition"  :rules="rules" :model="formData" label-width="140px">
        <el-form-item label="开发商ID" prop="devid">
          <el-input v-model="formData.devid" placeholder = '开发商ID'></el-input>
        </el-form-item>
        <el-form-item label="公司名称" prop="devname">
          <el-input v-model="formData.devname" placeholder = '公司名称'></el-input>
        </el-form-item>
        <el-form-item label="公司logo" prop="logo">
          <el-input v-model="formData.logo" placeholder = '公司logo'></el-input>
        </el-form-item>
        <el-form-item label="注册资本" prop="regcapital">
          <el-input v-model="formData.regcapital"></el-input>
        </el-form-item>
        <el-form-item label="公司证件影印" prop="imgsocode">
          <!-- <el-input v-model="formData.imgsocode"></el-input> -->
          <el-upload
            class="avatar-uploader"
            action="https://jsonplaceholder.typicode.com/posts/"
            :show-file-list="false"
            :on-success="handleAvatarSuccess"
            :before-upload="beforeAvatarUpload">
            <img v-if="formData.imgsocode" :src="formData.imgsocode" class="avatar">
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
          </el-upload>
          <input type="hidden" v-model="formData.imgsocode" name="">
        </el-form-item>
        <el-form-item label="投资商" prop="investorname">
          <el-input v-model="formData.investorname" placeholder = '投资商'></el-input>
        </el-form-item>
        <el-form-item label="代理商" prop="agentname">
          <el-input v-model="formData.agentname" placeholder = '代理商'></el-input>
        </el-form-item>

        <el-form-item label="联系姓名" prop="contractname">
          <el-input v-model="formData.contractname" placeholder = '联系姓名'></el-input>
        </el-form-item>
        <el-form-item label="联系人办公电话" prop="contractphone">
          <el-input v-model="formData.contractphone" placeholder = '联系人办公电话'></el-input>
        </el-form-item>

        <el-form-item label="手机" prop="contractmobile">
          <el-input v-model="formData.contractmobile" placeholder = '手机'></el-input>
        </el-form-item>
        <el-form-item label="详细地址" prop="address">
          <el-input v-model="formData.address" placeholder = '详细地址'></el-input>
        </el-form-item>
        <el-form-item label="办公地址" prop="office">
          <el-input v-model="formData.office" placeholder = '办公地址'></el-input>
        </el-form-item>
        <el-form-item label="备注" prop="summary">
          <el-input :autosize="{ minRows: 6, maxRows: 15}" type="textarea" v-model="formData.summary" placeholder="备注"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('formData')">提交</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import headTop from '@/components/headTop'
let vm;
export default {
  data() {
    return {
      formData: {
        devid:'',
        devname:'',
        logo:'',
        regcapital:'',
        imgsocode:'',
        investorname:'',
        agentname:'',
        contractname:'',
        contractphone:'',
        contractname:'',
        address:'',
        office:'',
        summary:''
      },
      labelPosition: "right",
      rules: {
        devid: [],
        devname: [{
          required: true, message: "请输入公司名称", trigger: 'change'
        }],
        logo: [],
        regcapital: [{
          required: true, message: "请输入注册资本", trigger: 'change'
        }],
        imgsocode: [],
        investorname: [],
        agentname: [],
        contractname: [{
          required: true, message: "请输入联系姓名", trigger: 'change'
        }],
        contractphone: [],
        contractmobile: [{
          required: true, message: "请输入手机", trigger: 'change'
        }],
        address: [],
        office: [{
          required: true, message: "请输入办公地址", trigger: 'change'
        }],
        summary: [],
      },
      dialogImageUrl:'',
      dialogVisible: false
    }
  },
  mounted(){
    vm = this;
    // console.log(this.$route.params);
  },
  components: {
    headTop
  },
  methods: {
    submitForm() {

    },
    handleAvatarSuccess(res, file) {
    },
    beforeAvatarUpload(file) {

    }
  }
}
</script>

<style lang="css">
</style>
