import ContactsContainer from 'containers/ContactsContainer';

const Contacts = {
  exact: true,
  path: '/contacts',
  component: ContactsContainer,
  prepareData: (store) => { // eslint-disable-line
    return;
  }
};

export default Contacts;
