import { SET_ARTICLE_LIST, SET_ARTICLE_LIST_LOADING } from '@/actions/actionTypes';

const initState = {
  total: 0,
  perPage: 10,
  currentPage: 1,
  list: [],
  loading: false
};

const articles = (state = initState, action) => {
  switch (action.type) {
    case SET_ARTICLE_LIST_LOADING:
      return {
        ...state,
        loading: action.payload
      };
    case SET_ARTICLE_LIST:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
}

export default articles;