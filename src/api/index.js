import { http } from '@/helper';

export const fetchUserinfo = params => http.get('/userinfo', params);