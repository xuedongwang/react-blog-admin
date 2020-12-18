import {
  FETCH_QR_CODE_ASYNC,
  SET_QR_CODE,
  FETCH_STATISTICS_ASYNC,
  SET_STATISTICS,
} from './actionTypes';

export const fetchQRCodeAsync = payload => {
  return {
    type: FETCH_QR_CODE_ASYNC,
    payload
  };
};

export const setQRCode = payload => {
  return {
    type: SET_QR_CODE,
    payload
  };
};

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