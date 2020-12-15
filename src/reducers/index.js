import { combineReducers } from 'redux';
import article from './article';
import breadcrumb from './breadcrumb';
import user from './user';

export default combineReducers({
  article,
  breadcrumb,
  user
})