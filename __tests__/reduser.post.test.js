import reducer from '../src/reducers/Post';
import * as types from '../src/constants/actionTypes/PostActionTypes';

describe('reducerPost', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(
      {
        isFetching: false,
        error: false,
        entry: null
      }
    );
  });

  it('should handle FETCH_POST_REQUEST', () => {
    expect(
      reducer(undefined, {
        type: types.FETCH_POST_REQUEST
      })
    ).toEqual(
      {
        isFetching: true,
        error: false,
        entry: null
      }
    );
  });
});
