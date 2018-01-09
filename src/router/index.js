import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const login = r => require.ensure([], () => r(require('@/page/login')), 'login');
const manage = r => require.ensure([], () => r(require('@/page/manage')), 'manage');
// manage下的子文件
const home = r => require.ensure([], () => r(require('@/page/manage/home'), 'home'));
const manSystem = r => require.ensure([], () => r(require('@/page/manage/manSystem'), 'manSystem'));

export default new Router({
  routes: [
  	{
		path: '/',
		component: login
	},
    {
      path: '/manage',
      name: 'manage',
      component: manage,
      children: [{
        path: '',
        name: '',
        component: home
      }, {
        path: '/manSystem',
        name: 'manSystem',
        component: manSystem,
        meta: ['后台管理-系统设置']
      }]
    }
  ]
})
