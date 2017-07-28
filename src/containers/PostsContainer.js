import { connect } from 'react-redux';

import BlogPage from 'components/BlogPage';

const stateToProps = (state) => ({
  items: state.posts.entries,
  isFetching: state.posts.isFetching,
  error: state.posts.error,
  maxPosts: state.posts.maxPosts,
  page: state.posts.page,
  step: state.posts.step
});

export default connect(stateToProps)(BlogPage);
