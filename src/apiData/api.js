import api from '@/config/api'
/**
 * 登陆
 */
export const login = (data, suc, err) => api('/login/plat', data, 'POST', suc, err);
