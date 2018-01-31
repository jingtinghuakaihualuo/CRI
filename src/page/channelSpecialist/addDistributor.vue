<template>
  <div class="fillcontain">
    <headTop></headTop>
    <el-form ref="formData" :label-position="labelPosition"  :rules="rules" :model="formData" label-width="140px">
      <div class="fromSystem left">
        <el-form-item label="顾问ID" prop="disid">
          <el-input v-model="formData.disid" placeholder = '顾问ID'></el-input>
        </el-form-item>
        <el-form-item label="上级机构ID" prop="disid">
          <el-input v-model="formData.dispid" placeholder = '上级机构ID'></el-input>
        </el-form-item>
        <el-form-item label="分销商名称" prop="disname">
          <el-input v-model="formData.disname" placeholder = '分销商名称'></el-input>
        </el-form-item>
        <el-form-item label="级别" prop="level">
          <el-input v-model="formData.level" placeholder = '级别'></el-input>
        </el-form-item>
        <el-form-item label="店面编号" prop="shopno">
          <el-input v-model="formData.shopno" placeholder = '店面编号'></el-input>
        </el-form-item>
        <el-form-item label="公司logo" prop="logo">
          <el-input v-model="formData.logo" placeholder = '公司logo'></el-input>
        </el-form-item>
        <el-form-item label="法人姓名" prop="instreprname">
          <el-input v-model="formData.instreprname" placeholder = '法人姓名'></el-input>
        </el-form-item>

        <el-form-item label="法人证件" prop="instreprcertn">
          <el-input v-model="formData.instreprcertn" placeholder = '法人证件'></el-input>
        </el-form-item>
        <el-form-item label="法人联系电话" prop="instreprphone">
          <el-input v-model="formData.instreprphone" placeholder = '法人联系电话'></el-input>
        </el-form-item>
        <el-form-item label="联系姓名" prop="contractname">
          <el-input v-model="formData.contractname" placeholder = '联系姓名'></el-input>
        </el-form-item>

        <el-form-item label="手机" prop="contractname">
          <el-input v-model="formData.contractname" placeholder = '手机'></el-input>
        </el-form-item>
        <el-form-item label="法人身份证影印" prop="imgcertno">
          <el-upload
            class="avatar-uploader"
            action="https://jsonplaceholder.typicode.com/posts/"
            :show-file-list="false"
            :on-success="handleAvatarSuccess"
            :before-upload="beforeAvatarUpload">
            <img v-if="formData.imgcertno" :src="formData.imgcertno" class="avatar">
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
          </el-upload>
          <!-- <el-input v-model="formData.imgcertno"></el-input> -->
          <input type="hidden" v-model="formData.imgcertno" name="">
        </el-form-item>
        <el-form-item label="开户证明影印" prop="imgopen">
          <!-- <el-input v-model="formData.imgopen"></el-input> -->
          <el-upload
            class="avatar-uploader"
            action="https://jsonplaceholder.typicode.com/posts/"
            :show-file-list="false"
            :on-success="handleAvatarSuccess"
            :before-upload="beforeAvatarUpload">
            <img v-if="formData.imgopen" :src="formData.imgopen" class="avatar">
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
          </el-upload>
          <input type="hidden" v-model="formData.imgopen" name="">
        </el-form-item>
      </div>
      <div class="fromSystem left">
        <el-form-item label="注册资本" prop="regcapital">
          <el-input v-model="formData.regcapital"></el-input>
        </el-form-item>
        <el-form-item label="社会统一信用代码证" prop="socode">
          <el-input v-model="formData.socode"></el-input>
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
        <el-form-item label="详细地址" prop="address">
          <el-input v-model="formData.address" placeholder = '详细地址'></el-input>
        </el-form-item>
        <el-form-item label="办公地址" prop="office">
          <el-input v-model="formData.office" placeholder = '办公地址'></el-input>
        </el-form-item>
        <el-form-item label="合作开始时间" prop="joinbegindate">
          <!-- <el-input v-model="formData.joinbegindate"></el-input> -->
          <el-date-picker
            v-model="formData.joinbegindate"
            type="date" style="width: 100%;"
            placeholder="合作开始时间" :editable="false">
          </el-date-picker>
        </el-form-item>
        <el-form-item label="合作结束时间" prop="joinenddate">
          <!-- <el-input v-model="formData.joinenddate"></el-input> -->
          <el-date-picker
            v-model="formData.joinenddate"
            type="date" style="width: 100%;"
            placeholder="合作结束时间" :editable="false">
          </el-date-picker>
        </el-form-item>
        <el-form-item label="状态" prop="status">
          <el-select v-model="formData.status" placeholder="状态选择">
            <el-option label="无效" value="0"></el-option>
            <el-option label="正常" value="1"></el-option>
            <el-option label="删除" value="9"></el-option>
            <el-option label="合作到期" value="a"></el-option>
            <el-option label="终止合作" value="b"></el-option>
            <el-option label="暂停合作" value="p"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="备注" prop="summary">
          <el-input :autosize="{ minRows: 6, maxRows: 15}" type="textarea" v-model="formData.summary" placeholder="备注"></el-input>
        </el-form-item>
        <el-form-item label="新建时间" prop="settime">
          <!-- <el-input v-model="formData.settime"></el-input> -->
          <el-date-picker
            v-model="formData.settime"
            type="date" style="width: 100%;"
            placeholder="新建时间" :editable="false">
          </el-date-picker>
        </el-form-item>
        <el-form-item label="修改时间" prop="updatetime">
          <el-date-picker
            v-model="formData.settime"
            type="date" style="width: 100%;"
            placeholder="修改时间" :editable="false">
          </el-date-picker>
          <!-- <el-input v-model="formData.updatetime"></el-input> -->
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
        disid: '',
        dispid: '',
        disname: '',
        level: '',
        shopno: '',
        logo: '',
        instreprname: '',
        instreprcertn: '',
        instreprphone: '',
        contractname: '',
        contractname: '',
        imgcertno: '',
        regcapital: '',
        socode: '',
        imgsocode: '',
        prov: '',
        city: '',
        area: '',
        address: '',
        office: '',
        joinbegindate: '',
        joinenddate: '',
        status: '',
        summary: '',
        settime: '',
        updatetime: '',
        imgopen: '',
      },
      labelPosition: "right",
      rules: {
        disid: [],
        dispid: [],
        disname: [
          {
            required: true, message: "请输入分销商名称", trigger: 'change'
          }
        ],
        level: [],
        shopno: [],
        logo: [],
        instreprname: [],
        instreprcertn: [],
        instreprphone: [],
        contractname: [],
        contractname: [],
        imgcertno: [],
        regcapital: [],
        socode: [],
        imgsocode: [],
        prov: [],
        city: [],
        area: [],
        address: [],
        office: [],
        joinbegindate: [],
        joinenddate: [],
        status: [],
        summary: [],
        settime: [],
        updatetime: [],
        imgopen: [],
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
