import { combineReducers } from 'redux';

import posts from './Posts';
import post from './Post';
import like from './Like';
import contacts from './Contacts';

export default combineReducers({
  posts,
  post,
  like,
  contacts
});
