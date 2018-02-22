<template>
	<div class="fillcontain">
		<el-row style="height: 100%;">
			<leftnav></leftnav>
			<el-col :span="21" style="height: 100%;overflow-x: hidden;overflow-y: auto;position:relative;">
				<keep-alive>
				    <router-view></router-view>
				</keep-alive>
			</el-col>
		</el-row>
  	</div>
</template>

<script>
  import leftnav from '@/components/leftnav'
	export default {
		data() {
			return {

			}
		},

		components: {
			leftnav
		},
		methods: {}
	}
</script>


<style lang="sass" scoped>
	@import '../style/mixin'
</style>
