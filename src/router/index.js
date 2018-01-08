import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const login = r => require.ensure([], () => r(require('@/page/login')), 'login');
const manage = r => require.ensure([], () => r(require('@/page/manage')), 'manage');


export default new Router({
  routes: [
  	{
		path: '/',
		component: login
	},
    {
      path: '/manage',
      name: '',
      component: manage,
      children: []
    }
  ]
})
