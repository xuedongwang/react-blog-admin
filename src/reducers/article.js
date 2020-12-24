import { SET_ARTICLE_LIST } from '@/actions/actionTypes';

const initState = {
  total: 0,
  perPage: 10,
  currentPage: 1,
  list: []
};

const articles = (state = initState, action) => {
  switch (action.type) {
    case SET_ARTICLE_LIST:
      return action.payload;
    default:
      return state;
  }
}

export default articles;