import { combineReducers } from 'redux';

import posts from './Posts';
import post from './Post';
import like from './Like';

export default combineReducers({
  posts,
  post,
  like
});
