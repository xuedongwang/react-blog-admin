import { SET_BREADCRUMB } from '@/actions/actionTypes';

const initState = [];

const article = (state = initState, action) => {
  switch (action.type) {
    case SET_BREADCRUMB:
      return action.payload;
    default:
      return state;
  }
}

export default article;