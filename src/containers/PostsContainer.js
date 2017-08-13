import { connect } from 'react-redux';
import { map } from 'lodash/collection';

import BlogPage from 'components/ui/BlogPage';
import { fetchPosts } from 'actions/Posts';
import { postsPath, editPostsPath } from 'helpers/routes/posts';

const stateToProps = (state) => ({
  items: map(
    state.posts.entries,
    (post) => (
      {
        ...post,
        url: postsPath(post.id),
        editUrl: editPostsPath(post.id)
      }
    )
  ),
  isFetching: state.posts.isFetching,
  error: state.posts.error,
  maxPosts: state.posts.maxPosts,
  page: state.posts.page,
  step: state.posts.step,
  query: state.posts.query
});

const actionsToProps = (dispatch) => ({
  fetchPosts: (page, step, query) => dispatch(fetchPosts(page, step, query))
});

export default connect(stateToProps, actionsToProps)(BlogPage);
