import api from '@/config/api'
/**
 * 登陆
 */
export const login = (data, suc, err) => api('/login', data, 'POST', suc, err);
