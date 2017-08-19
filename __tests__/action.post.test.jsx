import * as actions from '../src/actions/Post';
import * as types from '../src/constants/actionTypes/PostActionTypes';
import { API_CALL } from '../src/middleware/API';

describe ('actions', () => {
  it('should create an action to likePost', () => {
    const postId = 5;

    const expectedAction = {
      [API_CALL]: {
        endpoint: `/posts/${postId}`,
        method: 'GET',
        query: {},
        types: [
          types.FETCH_POST_REQUEST,
          types.FETCH_POST_SUCCESS,
          types.FETCH_POST_ERROR
        ]
      }
    };

    expect(actions.fetchPost(postId)).toEqual(expectedAction);
  });
});
