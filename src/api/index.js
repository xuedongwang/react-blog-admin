import { http } from '@/helper';

export const fetchUserinfo = args => http.get('/userinfo', args);
export const userLogin = args => http.post('/login', args);
export const fetchStatistics = args => http.get('/statistics', args);

// 分类相关
export const fetchCategoryList = args => http.get('/category_list', args);
export const createCategory = args => http.post('/create_category', args);
export const deleteCategory = args => http.get('/delete_category', args);

// 文章相关
export const fetchArticleList = args => http.get('/article_list', args);
export const createArticle = args => http.get('/create_article', args);
export const getArticleDetail = args => http.get('/get_article_detail', args);
export const saveArticleContent = args => http.post('/save_article_content', args);
export const saveArticle = args => http.post('/save_article', args);