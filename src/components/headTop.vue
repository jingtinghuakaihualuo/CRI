<template>
  <div class="header_container">

    <el-breadcrumb separator="/">
      <!-- <el-breadcrumb-item :to="{ path: '/manage' }">首页</el-breadcrumb-item> -->
      <el-breadcrumb-item v-for="(item, index) in $route.meta" key="index">{{item}}</el-breadcrumb-item>
    </el-breadcrumb>
    <div class="right headtop_a">
      <a href="javascript:void(0);">退出登录</a>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {}
    },
    created() {

    },
    computed: {},
    methods: {
      async handleCommand(command) {

      }
    }
  }
</script>

<style lang="sass">
  @import '../style/mixin'
  @import '../style/common'
</style>
