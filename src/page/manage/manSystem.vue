<template>
  <div class="fillcontain">
    <headTop></headTop>
    <div class="searchGroup">
      <el-form :inline="true" ref="searchForm" :label-position="labelPosition" :model="searchForm" label-width="100px" class="demo-form-inline">
        <el-form-item label="所属公司名称">
          <el-input v-model="searchForm.compyname"></el-input>
        </el-form-item>
        <el-form-item label="经纪人类型">
          <el-input v-model="searchForm.constype"></el-input>
        </el-form-item>
        <el-form-item label="真实证件姓名">
          <el-input v-model="searchForm.certname"></el-input>
        </el-form-item>
        <el-form-item label="城市代码">
          <el-select v-model="searchForm.city" placeholder="城市代码">
            <el-option label="北京" value="0"></el-option>
            <el-option label="天津" value="1"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="状态">
          <el-select v-model="searchForm.status " placeholder="状态">
            <el-option label="禁用" value="0"></el-option>
            <el-option label="正常" value="1"></el-option>
            <el-option label="锁定" value="2"></el-option>
            <el-option label="删除" value="9"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="开始记录">
          <el-input v-model="searchForm.start"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary">查找</el-button>
          <el-button type="primary" @click='addNew'>新增</el-button>
        </el-form-item>
      </el-form>
      <div class="dataTable">
        <el-table :data="tableData" style="width: 100%" height="500" empty-text="暂无数据">
          <el-table-column prop="conid" label="顾问ID" width="150"></el-table-column>
          <el-table-column prop="constype" label="经纪人类型" width="150"></el-table-column>
          <el-table-column prop="regtype" label="注册方式" width="150"></el-table-column>
          <el-table-column prop="compyid" label="所属公司ID" width="150"></el-table-column>
          <el-table-column prop="compyname" label="所属公司名称" width="150"></el-table-column>
          <el-table-column prop="loginid" label="登录帐号" width="150"></el-table-column>
          <el-table-column prop="pwd" label="登录密码" width="150"></el-table-column>
          <el-table-column prop="deposit" label="银行账号" width="150"></el-table-column>

          <el-table-column prop="openbank" label="开户行" width="150"></el-table-column>
          <el-table-column prop="img" label="顾问头像" width="150"></el-table-column>
          <el-table-column prop="background" label="背景图" width="150"></el-table-column>
          <el-table-column prop="sex"  label="性别" width="150">
            <template slot-scope="scope"><i>{{scope.row.sex == 0 ? '男': '女'}}</i></template>
          </el-table-column>
          <el-table-column prop="token" label="登录令牌" width="150"></el-table-column>
          <el-table-column prop="prov" label="省份代码" width="150"></el-table-column>
          <el-table-column prop="city" label="城市代码" width="150"></el-table-column>
          <el-table-column prop="area" label="区代码" width="150"></el-table-column>

          <el-table-column prop="points" label="累计积分" width="150"></el-table-column>
          <el-table-column prop="experience" label="行业经验" width="150"></el-table-column>
          <el-table-column prop="certname" label="真实证件姓名" width="150"></el-table-column>
          <el-table-column prop="certno" label="证件号码" width="150"></el-table-column>
          <el-table-column prop="imgcert" label="证件影印" width="150"></el-table-column>
          <el-table-column prop="imgcompany" label="公司影印" width="150"></el-table-column>
          <el-table-column prop="mobile" label="手机" width="150"></el-table-column>
          <el-table-column prop="telphone" label="办公电话" width="150"></el-table-column>

          <el-table-column prop="fax" label="传真" width="150"></el-table-column>
          <el-table-column prop="email" label="电子邮箱" width="150"></el-table-column>
          <el-table-column prop="office" label="办公地址" width="150"></el-table-column>
          <el-table-column prop="desc" label="自我描述" width="150"></el-table-column>
          <el-table-column prop="conuserid" label="渠道对接员用户ID" width="150"></el-table-column>、
          <el-table-column prop="conusername" label="渠道对接员姓名" width="150"></el-table-column>
          <el-table-column prop="conuserphone" label="渠道对接员联系电话" width="150"></el-table-column>
          <el-table-column prop="status" label="状态" width="150">
            <template slot-scope="scope"><i>{{scope.row.status == 0 ? '禁用': scope.row.status == 1 ? '正常' : scope.row.status == 2 ? '锁定': '删除'}}</i></template>
          </el-table-column>
          <el-table-column prop="summary" label="备注" width="150"></el-table-column>
          <el-table-column prop="settime" label="新建时间" width="150"></el-table-column>
          <el-table-column prop="updatetime" label="修改时间" width="150"></el-table-column>
          <el-table-column label="操作" fixed="right" width="250">
            <template slot-scope="scope">
              <el-button
                size="mini"
                type="text" v-if= "scope.row.status != 9">删除</el-button>
              <el-button
                size="mini"
                type="text" v-if= "scope.row.status != 1">正常</el-button>
              <el-button
                size="mini"
                type="text" v-if= "scope.row.status != 2">锁定</el-button>
              <el-button
                size="mini"
                type="text" v-if= "scope.row.status != 0">禁止</el-button>
              <el-button
                size="mini"
                type="text">修改</el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </div>
  </div>
</template>


<script>
  let vm
  import headTop from '@/components/headTop'
  export default {
    data() {
      return {
        searchForm: {
          compyname: "",
          constype: "",
          certname: "",
          city: "",
          status: "",
          start: "",
          limit: "10"
        },
        labelPosition: "right",
        tableData: [{
          conid: "100",
          constype: "100",
          regtype: "100",
          compyid: "100",
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
        }]
      }
    },
    mounted(){
      vm = this;
    },
    components: {
			headTop
		},
		methods: {
      addNew() {
        vm.$router.push({ name: 'addManSys', params: { userId: 123 }})
      }
    }

  }
</script>
