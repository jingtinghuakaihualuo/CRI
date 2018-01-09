<template>
  	<div class="login_page fillcontain">
	  	<transition name="form-fade" mode="in-out">
	  		<section class="form_contianer" v-show="showLogin">
		  		<div class="manage_tip">
		  			<p>后台管理系统</p>
		  		</div>
		    	<el-form :model="loginForm" :rules="rules" ref="loginForm">
  					<el-form-item prop="username">
  						<el-input v-model="loginForm.loginid" placeholder="登录号码"><span></span></el-input>
  					</el-form-item>
  					<el-form-item prop="password">
  						<el-input type="password" placeholder="密码" v-model="loginForm.pwd"></el-input>
  					</el-form-item>
  					<el-form-item>
  			    	<el-button type="primary" class="submit_btn" @click="submitForm('loginForm')">登陆</el-button>
  			  	</el-form-item>
  				</el-form>
	  		</section>
	  	</transition>
  	</div>
</template>

<script>
	import { login } from '@/apiData/api'
	// import {mapActions, mapState} from 'vuex'

	export default {
	    data(){
			return {
				loginForm: {
					loginid: '',
					pwd: '',
				},
				rules: {
					loginid: [
			            { required: true, message: '请输入登录号码', trigger: 'blur' },
			        ],
					pwd: [
						{ required: true, message: '请输入密码', trigger: 'blur' }
					],
				},
				showLogin: true,
			}
		},
		mounted(){

		},
		computed: {
		},
		methods: {
			async submitForm(formName) {
				this.$refs[formName].validate(async (valid) => {
					if (valid) {
						const res = await login({loginid: this.loginForm.loginid, pwd: this.loginForm.pwd}, function(res){
							if (res.code == "000") {
									this.$message({
                    type: 'success',
                    message: '登录成功'
                  });
                this.$router.push('manage');
							}
							else {
								this.$message({
                  type: 'error',
                  message: res.message
                });
							}
						}, function(res){
							this.$notify.error({
								title: '错误',
								message: '请输入正确的用户名密码',
								offset: 100
							});
							return false;
						});
					}
				});
			},
		},
		watch: {

		}
	}
</script>

<style lang="sass">
	@import '../style/mixin'
	@import '../style/login'
</style>
