import { SET_ARTICLE_LIST, FETCH_ARTICLE_LIST_ASYNC } from './actionTypes';
export const setArticles = payload => {
  return {
    type: SET_ARTICLE_LIST,
    payload
  };
};
export const fetchArticleListAsync = payload => {
  return {
    type: FETCH_ARTICLE_LIST_ASYNC,
    payload
  };
};
