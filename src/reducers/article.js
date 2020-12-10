import { SET_ARTICLES } from '@/actions/actionTypes';

const initState = {
  total: 0,
  perPage: 10,
  currentPage: 1,
  list: []
};

const article = (state = initState, action) => {
  switch (action.type) {
    case SET_ARTICLES:
      return action.payload;
    default:
      return state;
  }
}

export default article;