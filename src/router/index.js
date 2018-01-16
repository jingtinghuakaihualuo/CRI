import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const login = r => require.ensure([], () => r(require('@/page/login')), 'login');
const manage = r => require.ensure([], () => r(require('@/page/manage')), 'manage');
// manage下的子文件
const home = r => require.ensure([], () => r(require('@/page/manage/home'), 'home'));
const manSystem = r => require.ensure([], () => r(require('@/page/manage/manSystem'), 'manSystem'));
const addManSys = r => require.ensure([], () => r(require('@/page/manage/addManSys'), 'addManSys'));
const distributorMan = r => require.ensure([], () => r(require('@/page/manage/distributorMan'), 'distributorMan'));
const addDistributor = r => require.ensure([], () => r(require('@/page/manage/addDistributor'), 'addDistributor'));
const projectMan = r => require.ensure([], () => r(require('@/page/manage/projectMan'), 'projectMan'));
const addProjectMan = r => require.ensure([], () => r(require('@/page/manage/addProjectMan'), 'addProjectMan'));

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
        component: home,
        meta: ['系统设置']
      }, {
        path: '/manSystem',
        name: 'manSystem',
        component: manSystem,
        meta: ['职业顾问管理']
      },{
        path: '/addManSys',
        name: 'addManSys',
        component: addManSys,
        meta: ['新增职业顾问管理']
      },{
        path: '/distributorMan',
        name: 'distributorMan',
        component: distributorMan,
        meta: ['分销商管理']
      },{
        path: '/addDistributor',
        name: 'addDistributor',
        component: addDistributor,
        meta: ['增加分销商管理']
      },{
        path: '/projectMan',
        name: 'projectMan',
        component: projectMan,
        meta: ['项目管理-开发商查询']
      },{
        path: '/addProjectMan',
        name: 'addProjectMan',
        component: addProjectMan,
        meta: ['项目管理-增加开发商']
      }]
    }
  ]
})
