import { combineReducers } from 'redux';
import article from './article';
import user from './user';
import common from './common';
import category from './category';

export default combineReducers({
  article,
  user,
  common,
  category
})