<template>
  <div class="fillcontain">
    <headTop></headTop>
    <div class="page_body">
      <el-tabs v-model="currentTab" type="card"
               @tab-click="tabClick">
        <el-tab-pane
          v-for="(item,index) in tabsData"
          :label="'项目'+(index+1)"
          :name="index">
          <el-form :label-position="labelPosition">
            <el-form-item label="楼盘名称">
              <img :src="item['logo']" class="bldLogo"/>
              {{item['bldname']}}
            </el-form-item>
            <el-form-item label="楼盘全景">
              <img :src="item['panorama']" class="bldImg"/>
            </el-form-item>
            <el-form-item label="楼盘信息">
              <el-form inline class="info-form">
                <el-form-item v-for="(value,key) in buildingInfo" :label="value[0]"
                              :label-width=labelWidth>
                  <el-input v-model="item[key]" readonly/>
                </el-form-item>
              </el-form>
            </el-form-item>
            <el-form-item label="审批信息">
              <el-form inline class="info-form">
                <el-form-item v-for="(value,key) in approveInfo" :label="value[0]"
                              :label-width=labelWidth>
                  <el-input v-model="item[key]" readonly/>
                </el-form-item>
              </el-form>
            </el-form-item>

            <el-form-item label="项目状态">
              <el-form inline class="info-form">
                <el-form-item v-for="(value,key) in processInfo" :label="value[0]"
                              :label-width=labelWidth>
                  <el-input v-model="item[key]" readonly/>
                </el-form-item>
              </el-form>
            </el-form-item>

            <el-form-item label="联系信息">
              <el-form inline class="info-form">
                <el-form-item v-for="(value,key) in contactInfo" :label="value[0]"
                              :label-width=labelWidth>
                  <el-input v-model="item[key]" readonly/>
                </el-form-item>
              </el-form>
            </el-form-item>
            <el-form-item label="相关活动">
              <el-form inline class="info-form">
                <el-form-item v-for="(value,key) in activityInfo" :label="value[0]"
                              :label-width=labelWidth>
                  <el-input v-model="item[key]" readonly/>
                </el-form-item>
              </el-form>
            </el-form-item>


            <el-form-item label="审批结果">
              <el-radio-group v-model="approve">
                <el-radio label="1">通过</el-radio>
                <el-radio label="0">不通过</el-radio>
              </el-radio-group>
            </el-form-item>
            <el-form-item label="不通过原因" v-if="approve==0">
              <div style="width: 70%">
                <el-input type="textarea" v-model="reason"></el-input>
              </div>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="approveResult">确认提交</el-button>
            </el-form-item>
          </el-form>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
  let vm;
  import headTop from '@/components/headTop'
  import {getProjInfo, approveProj} from '@/apiData/api'


  export default {
    data() {
      return {
        tabsData: [1],
        reason: "",
        labelWidth: "135px",
        labelPosition: "top",
        approve: "0",
        panorama: ["全景", "100"],
        logo: ["楼盘LOGO", "100"],
        bldname: ["楼盘名称", "100"],
        buildingInfo: {
          bldid: ["楼盘ID", "100"],
          devid: ["所属开发商ID", "100"],
          devname: ["所属开发商名称", "100"],
          sellprice: ["销售起价", "100"],
          unit: ["单位", "100"],
          propertytype: ["物业类型", "100"],
          buildcategory: ["建筑类别", "100"],
          housetype: ["拥有户型", "100"],
          capital: ["资源", "100"],
          agentflag: ["代理自售", "100"],
          agentname: ["代理商名称", "100"],
          prov: ["楼盘省份代码", "100"],
          city: ["楼盘城市代码", "100"],
          area: ["楼盘区代码", "100"],
          address: ["详细地址", "100"],
        },
        approveInfo: {
          approverid: ["审批人ID", "100"],
          approvernm: ["审批人姓名", "100"],
          approvertm: ["审批时间", "100"],
          approverid2: ["审批人2ID", "100"],
          approvernm2: ["审批人2姓名", "100"],
          approvertm2: ["审批时间2", "100"],
          reason: ["审批失败原因", "100"],
        },
        processInfo: {
          appid: ["申请ID", "100"],
          opertype: ["申请类型", "100"],
          apperid: ["申请人ID", "100"],
          appernm: ["申请人姓名", "100"],
          appertm: ["申请时间", "100"],
          buildstatus: ["修改后项目状态", "100"],
          prestatus: ["上个申请状态", "100"],
          status: ["申请状态", "100"],
          summary: ["备注", "100"],
          settime: ["申请时间", "100"],
          updatetime: ["修改时间", "100"]
        },
        contactInfo: {
          conuserid: ["渠道对接员用户ID", "100"],
          conuserphone: ["渠道对接员联系电话", "100"],
          repusername: ["报备联系姓名", "100"],
          repuserphone: ["报备联系电话", "100"],
          saletelphone: ["售楼电话", "100"]
        },
        activityInfo: {
          uspdesc: ["卖点", "100"],
          isdeep: ["是否深度合作", "100"],
          reccate: ["推荐分类级别", "100"],
          actcate: ["活动分类级别", "100"],
          actname: ["活动名称", "100"],
          joinbegindate: ["深度合作开始时间", "100"],
          joinenddate: ["深度合作结束时间", "100"]
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
      tabClick(tab, event) {

      },
      init() {
        getProjInfo({approverid: 0, status: "2"}, function (response) {
          console.log(response);
          vm.tabsData = response.data.result
        }, function (err) {
          console.log(err)
        })
      },
      approveResult() {
        approveProj({
            approverid: 0, status: "2", appid: 1, reason: vm.reason
          }, function (response) {
            console.log(response);
            vm.init()
          }, function (err) {
            console.log(err)
          }
        )
      }
    }
  }
</script>

<style lang="sass" scoped>
  @import '../../style/manager'
</style>
