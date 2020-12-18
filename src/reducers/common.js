import { SET_QR_CODE, SET_STATISTICS, SET_BREADCRUMB } from '@/actions/actionTypes';


const initState = {
  statistics: {
    articleCount: '-',
    categoryCount: '-',
    commentCount: '-'
  },
  breadcrumb: [],
  loginQRCode: ''
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
    case SET_BREADCRUMB:
      return {
        ...state,
        breadcrumb: action.payload
      };
    default:
      return state;
  }
}

export default common;