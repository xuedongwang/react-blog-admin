import { SET_CATEGORY_LIST, SET_CATEGORY_LIST_LOADING } from '@/actions/actionTypes';

const initState = {
  total: 0,
  list: [],
  loading: false
};

const articles = (state = initState, action) => {
  switch (action.type) {
    case SET_CATEGORY_LIST_LOADING:
      return {
        ...state,
        loading: action.payload
      };
    case SET_CATEGORY_LIST:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
}

export default articles;