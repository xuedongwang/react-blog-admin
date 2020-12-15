import { SET_USERINFO } from '@/actions/actionTypes';

const initState = {};

const article = (state = initState, action) => {
  switch (action.type) {
    case SET_USERINFO:
      return action.data;
    default:
      return state;
  }
}

export default article;