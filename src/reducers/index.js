import { combineReducers } from 'redux';
import article from './article';
import breadcrumb from './breadcrumb';

export default combineReducers({
  article,
  breadcrumb
})