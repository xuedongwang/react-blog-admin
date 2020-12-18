import { SET_QR_CODE, SET_STATISTICS } from '@/actions/actionTypes';

const initState = {
  statistics: {
    articleCount: '-',
    categoryCount: '-',
    commentCount: '-'
  }
};

const common = (state = initState, action) => {
  switch (action.type) {
    case SET_QR_CODE:
      return {
        ...state,
        loginQRCode: action.data.url
      };
    case SET_STATISTICS:
      return {
        ...state,
        statistics: action.data
      }
    default:
      return state;
  }
}

export default common;