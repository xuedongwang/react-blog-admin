import { SET_STATISTICS, SET_BREADCRUMB, SET_GLOBAL_LOADING } from '@/actions/actionTypes';


const initState = {
  statistics: {
    articleCount: '-',
    categoryCount: '-',
    commentCount: '-'
  },
  breadcrumb: [],
  loading: false
};

const common = (state = initState, action) => {
  switch (action.type) {
    case SET_GLOBAL_LOADING:
      return {
        ...state,
        loading: action.payload
      }
    case SET_STATISTICS:
      return {
        ...state,
        statistics: action.payload
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