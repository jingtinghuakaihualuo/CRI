<template>
  <div class="fillcontain">
    <headTop></headTop>
    <div class="searchGroup">
      <el-form :inline="true" ref="searchForm" :label-position="labelPosition" :model="searchForm" label-width="100px" class="demo-form-inline">
        <el-form-item label="公司名称">
          <el-input v-model="searchForm.devname"></el-input>
        </el-form-item>
        <el-form-item label="状态">
          <el-select v-model="searchForm.status " placeholder="状态">
            <el-option label="无效" value="0"></el-option>
            <el-option label="正常" value="1"></el-option>
            <el-option label="删除" value="9"></el-option>
            <el-option label="合作到期" value="a"></el-option>
            <el-option label="终止合作" value="b"></el-option>
            <el-option label="暂停合作" value="p"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button type="primary">查找</el-button>
          <el-button type="primary" @click='addNew'>新增</el-button>
        </el-form-item>
      </el-form>
      <div class="dataTable">
        <el-table :data="tableData" style="width: 100%" height="500" empty-text="暂无数据">
          <el-table-column prop="devid" label="开发商ID" width="150"></el-table-column>
          <el-table-column prop="devname" label="公司名称" width="150"></el-table-column>
          <el-table-column prop="logo" label="公司logo" width="150"></el-table-column>
          <el-table-column prop="regcapital" label="注册资本" width="150"></el-table-column>
          <el-table-column prop="socode" label="社会统一信用代码证" width="150"></el-table-column>
          <el-table-column prop="imgsocode" label="公司证件影印" width="150"></el-table-column>
          <el-table-column prop="investorname" label="投资商" width="150"></el-table-column>
          <el-table-column prop="agentname" label="代理商" width="150"></el-table-column>

          <el-table-column prop="contractname" label="联系姓名" width="150"></el-table-column>
          <el-table-column prop="contractphone" label="联系人办公电话" width="150"></el-table-column>
          <el-table-column prop="contractmobile" label="手机" width="150"></el-table-column>
          <el-table-column prop="address" label="详细地址" width="150"></el-table-column>
          <el-table-column prop="office" label="办公地址" width="150"></el-table-column>
          <el-table-column prop="status" label="状态" width="250">
            <template slot-scope="scope"><i>{{scope.row.status == 0 ? '无效': scope.row.status == 1 ? '正常' : scope.row.status == 9 ? '删除': scope.row.status == 'a' ? '合作到期' : scope.row.status == 'b' ? '终止合作' : '暂停合作'}}</i></template>
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
                type="text" v-if= "scope.row.status != 0">无效</el-button>
              <el-button
                size="mini"
                type="text" v-if= "scope.row.status != 'a'">合作到期</el-button>
              <el-button
                size="mini"
                type="text" v-if= "scope.row.status != 'b'">终止合作</el-button>
              <el-button
                size="mini"
                type="text" v-if= "scope.row.status != 'c'">暂停合作</el-button>
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
          disname: "",
          status: "",
          limit: "10"
        },
        labelPosition: "right",
        tableData: [{
        	devid: '100',
          devname: '100',
          logo: '100',
          regcapital: '100',
          socode: '100',
          imgsocode: '100',
          investorname: '100',
          agentname: '100',
          contractname: '100',
          contractphone: '100',
          contractmobile: '100',
          address: '100',
          office: '100',
          status: '0',
          summary: '100',
          settime: '100',
          updatetime: '100',
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
        vm.$router.push({ name: 'addProjectMan', params: { userId: 123 }})
      }
    }

  }
</script>
