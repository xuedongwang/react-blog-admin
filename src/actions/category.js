import { FETCH_CATEGORY_LIST_ASYNC } from './actionTypes';
export const fetchCategoryListAsync = payload => {
  return {
    type: FETCH_CATEGORY_LIST_ASYNC,
    payload
  };
};
