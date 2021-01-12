import {
  SET_BREADCRUMB,
  FETCH_STATISTICS_ASYNC,
  SET_STATISTICS,
} from './actionTypes';

export const fetchStatisticsAsync = payload => {
  return {
    type: FETCH_STATISTICS_ASYNC,
    payload
  };
};

export const setStatistics = payload => {
  return {
    type: SET_STATISTICS,
    payload
  };
};

export const setBreadcrumb = payload => {
  return {
    type: SET_BREADCRUMB,
    payload
  };
};
