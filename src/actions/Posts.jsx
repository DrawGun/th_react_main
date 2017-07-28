import request from 'superagent';

import { API_ROOT } from 'constants/API';
import * as types from 'constants/actionTypes/PostsActionTypes';

import { map } from 'lodash/collection';
import { postsPath } from 'helpers/routes/posts';

const requestPosts = () => ({
  type: types.FETCH_POSTS_REQUEST
});

const recivePosts = (response, maxPosts, page) => ({
  type: types.FETCH_POSTS_SUCCESS,
  response,
  maxPosts,
  page
});

const errorPosts = () => ({
  type: types.FETCH_POSTS_ERROR
});

export function fetchPosts(page, step) {
  return (dispatch) => {
    dispatch(requestPosts());

    return request
      .get(`${API_ROOT}/?page=${page}&step=${step}`)
      .end((err, response) => {
        const posts = map(
          response.body,
          (post) => (
            { ...post, url: postsPath(post.id) }
          )
        );
        const maxPosts =  parseInt(response.headers['max-posts']);
        err ?
          dispatch(errorPosts()) :
          dispatch(recivePosts(posts, maxPosts, page));
      });
  };
}
