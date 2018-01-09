<template>
  <div class="fillcontain">
    <headTop></headTop>
    <div class="fromSystem">
      <el-form ref="formData"  :rules="rules" :model="formData" label-width="100px">
        <el-form-item label="系统名称">
          <el-input v-model="formData.sitename"></el-input>
        </el-form-item>
        <el-form-item label="系统关键词">
          <el-input v-model="formData.keywords"></el-input>
        </el-form-item>
        <el-form-item label="系统描述">
          <el-input :autosize="{ minRows: 4, maxRows: 8}" type="textarea" v-model="formData.description"></el-input>
        </el-form-item>
        <el-form-item label="注册协议">
          <el-input :autosize="{ minRows: 6, maxRows: 15}" type="textarea" v-model="formData.registered"></el-input>
        </el-form-item>
        <el-form-item label="关于我们">
          <el-input :autosize="{ minRows: 6, maxRows: 15}" type="textarea" v-model="formData.aboutus"></el-input>
        </el-form-item>
        <el-form-item label="电子邮箱">
          <el-input v-model="formData.email"></el-input>
        </el-form-item>
        <el-form-item label="客服热线">
          <el-input v-model="formData.telphone"></el-input>
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
  export default {
    data() {
      return {
        formData: {
          sitename: '',
          keywords: '',
          description: '',
          registered: '',
          aboutus: '',
          email: '',
          telphone: ''
        },
        rules: {

        }
      }
    },
    components: {
			headTop
		},
		methods: {
      async submitForm(formName) {
        this.$refs[formName].validate(async (valid) => {
        })
      }
    }

  }
</script>
