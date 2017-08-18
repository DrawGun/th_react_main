import { assign } from 'lodash/object';

import * as types from 'constants/actionTypes/ContactsActionTypes';

const initialState = {
  isFetching: false,
  error: false,
  contacts: [],
  errors: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case types.FETCH_CONTACTS_REQUEST:
      return assign({}, state, { isFetching: true });
    case types.FETCH_CONTACTS_ERROR:
      return assign({}, state, {
        errors: action.error.body,
        error: true,
        isFetching: false
      });
    case types.FETCH_CONTACTS_SUCCESS:
      return assign({}, state, {
        contacts: action.response.body,
        error: false,
        isFetching: false
      });
    default:
      return state;
  }
}
