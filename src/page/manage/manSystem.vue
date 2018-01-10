<template>
  <div class="fillcontain">
    <headTop></headTop>
    <div class="searchGroup">
      <!-- <el-form :inline="true" ref="searchForm" :label-position="labelPosition" :model="searchForm" label-width="100px" class="demo-form-inline">
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
      </el-form> -->
    </div>
  </div>
</template>

<script>
  import headTop from '@/components/headTop'
  export default {
    data() {
      return {
        searchForm: {
          compyname: "",
          constype: "",
          certname: "",
          city: ""
        },
        labelPosition: "right",
      }
    },
    components: {
			headTop
		},
		methods: {}

  }
</script>
