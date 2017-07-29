import * as types from 'constants/actionTypes/LikeActionTypes';

import { API_CALL } from 'middleware/API';

export function addLike(id, itemType) {
  const endpoint = setLikeUrl(itemType, id);

  return {
    [API_CALL]: {
      endpoint,
      method: 'POST',
      query: {},
      types: [
        types.FETCH_LIKE_REQUEST,
        types.FETCH_LIKE_SUCCESS,
        types.FETCH_LIKE_ERROR
      ]
    }
  };
}

function setLikeUrl (itemType, id) {
  switch (itemType) {
    case types.LIKE_POST:
      return `/posts/${id}/like`;
    default:
      return `/posts/${id}/like`;
  }
}
