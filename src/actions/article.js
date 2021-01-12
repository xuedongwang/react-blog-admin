import { FETCH_ARTICLE_LIST_ASYNC } from './actionTypes';
export const fetchArticleListAsync = payload => {
  return {
    type: FETCH_ARTICLE_LIST_ASYNC,
    payload
  };
};
