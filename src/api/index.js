import { http } from '@/helper';

export const fetchUserinfo = params => http.get('/userinfo', params);
export const fetchLoginQRCode = params => http.get('/get_qr_code', params);
export const fetchStatistics = params => http.get('/statistics', params);
export const fetchArticleList = params => http.get('/article_list', params);