import { FETCH_QR_CODE_ASYNC, SET_QR_CODE } from './actionTypes';

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