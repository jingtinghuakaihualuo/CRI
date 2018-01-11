<template>
  <div class="fillcontain">
    <headTop></headTop>
    <el-form ref="formData" :label-position="labelPosition"  :rules="rules" :model="formData" label-width="140px">
      <div class="fromSystem left">
        <el-form-item label="顾问ID" prop="conid">
          <el-input v-model="formData.conid"></el-input>
        </el-form-item>
        <el-form-item label="经纪人类型" prop="constype">
          
          <el-select v-model="formData.constype" placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="注册方式" prop="regtype">
          <el-input v-model="formData.regtype"></el-input>
        </el-form-item>
        <el-form-item label="所属公司ID" prop="compyid">
          <el-input v-model="formData.compyid"></el-input>
        </el-form-item>
        <el-form-item label="所属公司名称" prop="compyname">
          <el-input v-model="formData.compyname"></el-input>
        </el-form-item>
        <el-form-item label="登录帐号" prop="loginid">
          <el-input v-model="formData.loginid"></el-input>
        </el-form-item>
        <el-form-item label="银行账号" prop="deposit">
          <el-input v-model="formData.deposit"></el-input>
        </el-form-item>

        <el-form-item label="开户行" prop="openbank">
          <el-input v-model="formData.openbank"></el-input>
        </el-form-item>
        <el-form-item label="顾问头像" prop="img">
          <el-input v-model="formData.img"></el-input>
        </el-form-item>
        <el-form-item label="背景图" prop="background">
          <el-input v-model="formData.background"></el-input>
        </el-form-item>
        <el-form-item label="性别" prop="sex">
          <el-select v-model="formData.sex" placeholder="区">
            <el-option label="男" value="0"></el-option>
            <el-option label="女" value="1"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="省份" prop="prov">
          <el-select v-model="formData.prov" placeholder="省份">
            <el-option label="北京" value="0"></el-option>
            <el-option label="天津" value="1"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="城市" prop="city">
          <el-select v-model="formData.city" placeholder="城市">
            <el-option label="北京" value="0"></el-option>
            <el-option label="天津" value="1"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="区" prop="area">
          <el-select v-model="formData.area" placeholder="区">
            <el-option label="北京" value="0"></el-option>
            <el-option label="天津" value="1"></el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="证件号码" prop="certno">
          <el-input v-model="formData.certno"></el-input>
        </el-form-item>
        <el-form-item label="证件影印" prop="imgcert">
          <el-upload
            class="avatar-uploader"
            action="https://jsonplaceholder.typicode.com/posts/"
            :show-file-list="false"
            :on-success="handleAvatarSuccess"
            :before-upload="beforeAvatarUpload">
            <img v-if="formData.imgcert" :src="formData.imgcert" class="avatar">
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
          </el-upload>
          <!-- <el-input v-model="formData.imgcert"></el-input> -->
          <input type="hidden" v-model="formData.imgcert" name="">
        </el-form-item>
        
      </div>
      <div class="fromSystem left">
        <el-form-item label="行业经验" prop="experience">
          <el-input v-model="formData.experience"></el-input>
        </el-form-item>
        <el-form-item label="真实证件姓名" prop="certname">
          <el-input v-model="formData.certname"></el-input>
        </el-form-item>
        <el-form-item label="手机" prop="mobile">
          <el-input v-model="formData.mobile"></el-input>
        </el-form-item>
        <el-form-item label="办公电话" prop="telphone">
          <el-input v-model="formData.telphone"></el-input>
        </el-form-item>
        <el-form-item label="传真" prop="fax">
          <el-input v-model="formData.fax"></el-input>
        </el-form-item>
        <el-form-item label="电子邮箱" prop="email">
          <el-input v-model="formData.email"></el-input>
        </el-form-item>
        <el-form-item label="办公地址" prop="office">
          <el-input v-model="formData.office"></el-input>
        </el-form-item>
        <el-form-item label="自我描述" prop="desc">
          <el-input :autosize="{ minRows: 6, maxRows: 15}" type="textarea" v-model="formData.desc"></el-input>
        </el-form-item>
        <el-form-item label="渠道对接员用户ID" prop="conuserid">
          <el-input v-model="formData.conuserid"></el-input>
        </el-form-item>
        <el-form-item label="渠道对接员姓名" prop="conusername">
          <el-input v-model="formData.conusername"></el-input>
        </el-form-item>
        <el-form-item label="渠道对接员联系电话" prop="conuserphone">
          <el-input v-model="formData.conuserphone"></el-input>
        </el-form-item>
        <el-form-item label="备注" prop="summary">
          <el-input :autosize="{ minRows: 6, maxRows: 15}" type="textarea" v-model="formData.summary"></el-input>
        </el-form-item>
        <el-form-item label="公司影印" prop="imgcompany">
          <!-- <el-input v-model="formData.imgcompany"></el-input> -->
          <el-upload
            class="avatar-uploader"
            action="https://jsonplaceholder.typicode.com/posts/"
            :show-file-list="false"
            :on-success="handleAvatarSuccess"
            :before-upload="beforeAvatarUpload">
            <img v-if="formData.imgcompany" :src="formData.imgcompany" class="avatar">
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
          </el-upload>
          <input type="hidden" v-model="formData.imgcompany" name="">
        </el-form-item>
      </div>
      <div class="clear"></div>
      <el-form-item>
        <el-button type="primary" @click="submitForm('formData')">提交</el-button>
      </el-form-item>
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
        regtype: "",
        compyid: "",
        compyname: "",
        loginid: "",
        deposit: "",
        openbank: "",
        img: "",
        background: "",
        sex: "",
        prov: "",
        city: "",
        prov: "",
        experience: "",
        certname: "",
        certno: "",
        imgcert: "",
        imgcompany: "",
        mobile: "",
        telphone: "",
        fax: "",
        email: "",
        office: "",
        desc: "",
        conuserid: "",
        conusername: "",
        conuserphone: "",
        summary: "",
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
      rules: {
        conid:[],
        constype: [{
          required: true, message: "请输入经纪人类型", trigger: 'change'
        }],
        regtype: [{
          required: true, message: "注册方式", trigger: 'change'
        }],
        compyid: [{
          required: true, message: "所属公司ID", trigger: 'change'
        }],
        compyname: [{
          required: true, message: "所属公司名称", trigger: 'change'
        }],
        loginid: [{
          required: true, message: "所属公司名称", trigger: 'change'
        }],
        deposit: [],
        openbank: [],
        img: [],
        background: [],
        sex: [{
          required: true, message: "性别", trigger: 'change'
        }],
        prov: [],
        city: [],
        prov: [],
        experience: [],
        certname: [],
        certno: [],
        imgcert: [],
        imgcompany: [],
        mobile: [{
          required: true, message: "手机", trigger: 'change'
        }],
        telphone: [],
        fax: [],
        email: [],
        office: [],
        desc: [],
        conuserid: [],
        conusername: [],
        conuserphone: [],
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
