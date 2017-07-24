import { connect } from 'react-redux';

import BlogPage from 'components/BlogPage';

import { setPage } from 'actions/Posts';

const stateToProps = (state) => ({
  items: state.posts.entries,
  isFetching: state.posts.isFetching,
  error: state.posts.error,
  maxPosts: state.posts.maxPosts,
  page: state.posts.page,
  step: state.posts.step
});

const actionsToProps = (dispatch, ownProps) => ({
  setPage: (page) => dispatch(setPage(page, ownProps.step))
});

export default connect(stateToProps, actionsToProps)(BlogPage);
