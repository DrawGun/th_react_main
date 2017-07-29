import { assign } from 'lodash/object';
import { map } from 'lodash/collection';

import * as types from 'constants/actionTypes/PostsActionTypes';

const initialState = {
  isFetching: false,
  error: false,
  entries: [],
  maxPosts: 0,
  step: 2,
  page: 1,
  query: null
};

export default function(state = initialState, action) {
  switch (action.type) {
    case types.FETCH_POSTS_REQUEST:
      return assign({}, state, { isFetching: true });
    case types.FETCH_POSTS_ERROR:
      return assign({}, state, { error: true });
    case types.FETCH_POSTS_SUCCESS:
      return assign({}, state, {
        entries: action.response.body,
        maxPosts: parseInt(action.response.headers['max-posts']),
        page: action.response.query.page,
        step: action.response.query.step,
        query: action.response.query.query,
        isFetching: false
      });
    case types.ADD_LIKE:
      return assign({}, state, {
        entries: incrementLikes(state.entries, action.itemId)
      });
    default:
      return state;
  }
}

const incrementLikes = (posts, postId) => (
  map(
    posts,
    (post) => (
      (post.id === postId) ?
        { ...post, meta: { ...post.meta, likes: post.meta.likes + 1 }} : post)
  )
);
