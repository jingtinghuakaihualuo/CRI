<template>
    <div class="header_container">

		<el-breadcrumb separator="/">
			<el-breadcrumb-item :to="{ path: '/manage' }">首页</el-breadcrumb-item>
			<el-breadcrumb-item v-for="(item, index) in $route.meta" key="index">{{item}}</el-breadcrumb-item>
		</el-breadcrumb>
    </div>
</template>

<script>

    export default {
    	data(){
    		return {
    		}
    	},
    	created(){

    	},
    	computed: {
    	},
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
