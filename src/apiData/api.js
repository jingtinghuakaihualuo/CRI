import api from '@/config/api'
/**
 * 登陆
 */
export const login = (data, suc, err) => api('/login/plat', data, 'POST', suc, err);
/*
* 获取项目信息*/
export const getProjInfo = (data, suc, err) => api('/approve/build', data, 'POST', suc, err);
