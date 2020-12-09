import { SET_ARTICLES } from './actionTypes';
export const setArticles = payload => {
  return {
    type: SET_ARTICLES,
    payload
  };
};