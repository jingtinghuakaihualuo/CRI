<template>
  <div class="fillcontain">
    <headTop></headTop>
    <div class="searchGroup">
      <div class="dataTable">
        <el-form :inline="true">
          <el-form-item v-for="(value,key) in formData" v-bind:label="value[0]" v-bind:prop="key" width="150">
            <el-input v-model="value[1]" readonly/>
          </el-form-item>

          <!--<el-table-column label="审批" fixed="right" width="250">-->
          <!--<template slot-scope="scope">-->
          <!--<el-button-->
          <!--size="mini"-->
          <!--type="text">通过-->
          <!--</el-button>-->
          <!--<el-button-->
          <!--size="mini"-->
          <!--type="text">不通过-->
          <!--</el-button>-->
          <!--</template>-->
          <!--</el-table-column>-->
        </el-form>

      </div>
    </div>
  </div>
</template>

<script>
  let vm;
  import headTop from '@/components/headTop'
  import {getProjInfo} from '@/apiData/api'


  export default {
    data() {
      return {
        formData: {
          appid: ["ID", "100"],
          bldid: ["ID", "100"],
          bldname: ["ID", "100"],
          devid: ["ID", "100"],
          compyname: ["ID", "100"],
          loginid: ["ID", "100"],
          pwd: ["ID", "100"],
          deposit: ["ID", "100"],
          openbank: ["ID", "100"],
          img: ["ID", "100"],
          background: ["ID", "100"],
          token: ["ID", "100"],
          prov: ["ID", "100"],
          city: ["ID", "100"],
          area: ["ID", "100"],
          points: ["ID", "100"],
          experience: ["ID", "100"],
          certname: ["ID", "100"],
          certno: ["ID", "100"],
          imgcert: ["ID", "100"],
          imgcompany: ["ID", "100"],
          mobile: ["ID", "100"],
          telphone: ["ID", "100"],
          fax: ["ID", "100"],
          email: ["ID", "100"],
          office: ["ID", "100"],
          desc: ["ID", "100"],
          conuserid: ["ID", "100"],
          conusername: ["ID", "100"],
          conuserphone: ["ID", "100"],
          summary: ["ID", "100"],
          settime: ["ID", "100"],
          updatetime: "100"
        }
      }
    },
    mounted() {
      vm = this;
      this.init()
    },
    components: {
      headTop
    },
    methods: {
      init: function () {
        getProjInfo({approverid: 0}, function (response) {
          console.log(response);
          for (let key in response.data) {
            this.formData[key][1] = response.data[key]
          }
        }, function (err) {
          console.log(err)
        })
      }
    }
  }
</script>
