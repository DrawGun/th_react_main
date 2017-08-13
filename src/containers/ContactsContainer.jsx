import { connect } from 'react-redux';

import ContactsPage from 'components/ui/ContactsPage';
import { createContacts } from 'actions/Contacts';

const stateToProps = (state) => ({
  isFetching: state.contacts.isFetching,
  error: state.contacts.error,
  contacts: state.contacts.contacts,
  errors: state.contacts.errors
});

const actionsToProps = (dispatch) => ({
  createContacts: (contacts) => dispatch(createContacts(contacts))
});

export default connect(stateToProps, actionsToProps)(ContactsPage);
