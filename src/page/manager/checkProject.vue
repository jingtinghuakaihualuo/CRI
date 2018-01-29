<template>
  <div class="fillcontain">
    <headTop></headTop>
    <div class="searchGroup">
      <div class="dataTable">
        <el-form :inline="true" style="width: 100%" empty-text="暂无数据">
          <el-form-item v-for="item in getItems" v-bind:label="item.labelName" v-bind:prop="item.propertyName" width="150">
          {{item.propertyValue}}
          </el-form-item>
          <el-form-item label="kkk">

            <el-button type="text" @click="getItems">lll</el-button>
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

  function FormItem(propertyName, labelName, propertyValue) {
    this.propertyName = propertyName;
    this.labelName = labelName;
    this.propertyValue = propertyValue;
  }

  export default {
    data() {

      return {

        formData: {
          appid: "100",
          bldid: "100",
          bldname: "100",
          devid: "100",
          compyname: "100",
          loginid: "100",
          pwd: "100",
          deposit: "100",
          openbank: "100",
          img: "100",
          background: "100",
          sex: "0",
          token: "100",
          prov: "100",
          city: "100",
          area: "100",
          points: "100",
          experience: "100",
          certname: "100",
          certno: "100",
          imgcert: "100",
          imgcompany: "100",
          mobile: "100",
          telphone: "100",
          fax: "100",
          email: "100",
          office: "100",
          desc: "100",
          conuserid: "100",
          conusername: "100",
          conuserphone: "100",
          status: "1",
          summary: "100",
          settime: "100",
          updatetime: "100"
        }
      }
    },
    mounted() {
      vm = this;
//      getProjInfo({approverid: 0}, function (response) {
//        console.log(response);
//        this.formData = response.data;
//      }, function (err) {
//        console.log(err)
//      })
    },
    components: {
      headTop
    },
    methods: {
      getItems: function () {
        const items = new Array();
        for (let item in this.formData) {
          console.log(item+this.formData[item])
//          items.push(new FormItem(item,this.formData[item], "9"))
        }

      }
    }

  }
</script>
