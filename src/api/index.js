import { http } from '@/helper';

export const fetchUserinfo = args => http.get('/userinfo', args);
export const fetchLoginQRCode = args => http.get('/get_qr_code', args);
export const fetchStatistics = args => http.get('/statistics', args);
export const fetchArticleList = args => http.get('/article_list', args);
export const createArticle = args => http.get('/create_article', args);
export const getArticleDetail = args => http.get('/get_article_detail', args);
export const saveArticleContent = args => http.post('/save_article_content', args);
export const saveArticle = args => http.post('/save_article', args);