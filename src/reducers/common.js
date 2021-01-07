import { SET_STATISTICS, SET_BREADCRUMB } from '@/actions/actionTypes';


const initState = {
  statistics: {
    articleCount: '-',
    categoryCount: '-',
    commentCount: '-'
  },
  breadcrumb: [],
  userLoginInfo: ''
};

const common = (state = initState, action) => {
  switch (action.type) {
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