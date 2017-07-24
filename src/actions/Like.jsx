import * as types from 'constants/actionTypes/PostsActionTypes';

const incrementLike = (itemId, itemType) => ({
  type: types.ADD_LIKE,
  itemId,
  itemType
});

export function addLike(itemId, itemType) {
  return (dispatch) => {
    dispatch(incrementLike(itemId, itemType));
  };
}
