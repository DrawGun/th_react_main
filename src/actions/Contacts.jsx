import * as types from 'constants/actionTypes/ContactsActionTypes';

import { API_CALL } from 'middleware/API';

export function createContacts(contacts) {
  return {
    [API_CALL]: {
      endpoint: '/contacts',
      method: 'POST',
      query: {},
      payload: contacts,
      types: [
        types.FETCH_CONTACTS_REQUEST,
        types.FETCH_CONTACTS_SUCCESS,
        types.FETCH_CONTACTS_ERROR
      ]
    }
  };
}
