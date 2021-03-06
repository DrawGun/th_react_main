import { assign } from 'lodash/object';
import { map } from 'lodash/collection';

import * as types from 'constants/actionTypes/LikeActionTypes';
import * as postsTypes from 'constants/actionTypes/PostsActionTypes';
import * as postTypes from 'constants/actionTypes/PostActionTypes';

const initialState = {
  isFetching: false,
  error: false,
  entries: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case types.FETCH_LIKE_REQUEST:
      return assign({}, state, { isFetching: true });
    case types.FETCH_LIKE_ERROR:
      return assign({}, state, { error: true });
    case types.FETCH_LIKE_SUCCESS:
      return assign({}, state, {
        entries: map(
          state.entries,
          (item) => (
            item.id == action.response.body.id ?
              { ...item, likes: action.response.body.meta.likes } :
              item
          )
        ),
        isFetching: false
      });
    case postsTypes.FETCH_POSTS_SUCCESS:
      return assign({}, state, {
        entries: map(
          action.response.body,
          (item) => (
            { id: item.id, likes: item.meta.likes }
          )
        )
      });
    case postTypes.FETCH_POST_SUCCESS:
      return assign({}, state, {
        entries: [
          {
            id: action.response.body.id,
            likes: action.response.body.meta.likes
          }
        ]
      });
    default:
      return state;
  }
}
