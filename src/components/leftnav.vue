<template>
	<el-col :span="3"  style="min-height: 100%;background-color: #324057;">
	<!--   -->
		<el-menu :default-active="defaultActive" style="min-height: 100%;" router>
			<!-- <el-menu-item index="manage"><i class="el-icon-menu"></i>首页</el-menu-item> -->
			<!-- <i class="el-icon-setting"></i> -->
			<el-menu-item index="manage">系统设置</el-menu-item>
			<el-menu-item index="manSystem">置业顾问管理</el-menu-item>
			<el-menu-item index="distributorMan">分销商管理</el-menu-item>
			<!-- <el-menu-item index="">项目管理</el-menu-item> -->
			<el-submenu index="1">
				<template slot="title"></i>项目管理</template>
				<el-menu-item index="projectMan">开发商</el-menu-item>
				<el-menu-item index="projectMes">项目信息</el-menu-item>
			</el-submenu>
			<el-menu-item index="">客户管理</el-menu-item>
			<el-menu-item index="">业绩佣金管理</el-menu-item>
			<el-menu-item index="">数据管理</el-menu-item>
			<el-menu-item index="">公告信息</el-menu-item>
			<el-menu-item index="">广告管理</el-menu-item>
			<el-menu-item index="">后台管理员与权限</el-menu-item>
			<el-menu-item index="">投诉建议管理</el-menu-item>
			<el-menu-item index="">网站管理</el-menu-item>
			<el-menu-item index="">微信管理</el-menu-item>
			<el-menu-item index="">加盟管理</el-menu-item>
			<el-menu-item index="">其它</el-menu-item>
			<el-menu-item index="">带看费支付功能</el-menu-item>
			<el-menu-item index="">项目管理员</el-menu-item>
			<!-- <el-submenu index="2">
				<template slot="title"><i class="el-icon-document"></i>后台管理</template>
				<el-menu-item index="manSystem">系统设置</el-menu-item>
				<el-menu-item index="">分销商的置业顾问管理</el-menu-item>
				<el-menu-item index="">分销商管理</el-menu-item>
				<el-menu-item index="">项目管理</el-menu-item>
				<el-menu-item index="">客户管理</el-menu-item>
				<el-menu-item index="">业绩佣金管理</el-menu-item>
				<el-menu-item index="">数据管理</el-menu-item>
				<el-menu-item index="">公告信息</el-menu-item>
				<el-menu-item index="">广告管理</el-menu-item>
				<el-menu-item index="">后台管理员与权限</el-menu-item>
				<el-menu-item index="">投诉建议管理</el-menu-item>
				<el-menu-item index="">网站管理</el-menu-item>
				<el-menu-item index="">微信管理</el-menu-item>
				<el-menu-item index="">加盟管理</el-menu-item>
				<el-menu-item index="">其它</el-menu-item>
				<el-menu-item index="">带看费支付功能</el-menu-item>
				<el-menu-item index="">区域管理</el-menu-item>
				<el-menu-item index="">项目管理员</el-menu-item>
			</el-submenu> -->
			<!-- <el-submenu index="3">
				<template slot="title"><i class="el-icon-plus"></i>添加数据</template>
				<el-menu-item index="addShop">添加商铺</el-menu-item>
				<el-menu-item index="addGoods">添加商品</el-menu-item>
			</el-submenu>
			<el-submenu index="4">
				<template slot="title"><i class="el-icon-star-on"></i>图表</template>
				<el-menu-item index="visitor">用户分布</el-menu-item>
			</el-submenu>
			<el-submenu index="5">
				<template slot="title"><i class="el-icon-edit"></i>编辑</template>
				<el-menu-item index="vueEdit">文本编辑</el-menu-item>
			</el-submenu>
			<el-submenu index="6">
				<template slot="title"><i class="el-icon-setting"></i>设置</template>
				<el-menu-item index="adminSet">管理员设置</el-menu-item>
			</el-submenu>
			<el-submenu index="7">
				<template slot="title"><i class="el-icon-warning"></i>说明</template>
				<el-menu-item index="explain">说明</el-menu-item>
			</el-submenu> -->
		</el-menu>
	</el-col>
</template>
<script>
	export default {
		data() {
			return {

			}
		},
		computed: {
			defaultActive: function(){
				return this.$route.path.replace('/', '');
			}
		},
		methods: {

		}
	}
</script>

<style lang="sass" scoped>
	@import '../style/mixin'
	@import '../style/common'
</style>
