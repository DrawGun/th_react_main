import { connect } from 'react-redux';

import BlogPage from 'components/BlogPage';

const stateToProps = (state) => ({
  items: state.posts.entries,
  isFetching: state.posts.isFetching,
  error: state.posts.error
});

export default connect(stateToProps)(BlogPage);
