import api from '@/config/api'
/**
 * 登陆
 */
export const login = (data, suc, err) => api('/login/plat', data, 'POST', suc, err);
/*
* 获取项目信息*/
export const getProjInfo = (data, suc, err) => api('/approve/build', data, 'POST', suc, err);
/*
* 项目审批*/
export const approveProj = (data, suc, err) => api('/approve/build/do', data, 'POST', suc, err);

/*
* 新增分销商*/
export const addDistributor = (data, suc, err) => api('/plat/distributor/add', data, 'POST', suc, err);


