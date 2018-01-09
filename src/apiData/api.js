import api from '@/config/api'
/**
 * 登陆
 */
export const login = data => api('/login', data, 'POST');
