import PostsContainer from 'containers/PostsContainer';

import initialLoad from 'helpers/initialLoad';
import { fetchPosts } from 'actions/Posts';

const Posts = {
  exact: true,
  path: '/',
  component: PostsContainer,
  prepareData: (store) => {
    if (initialLoad()) return;

    const { page, step } = store.getState().posts;
    return store.dispatch(fetchPosts(page, step));
  }
};

export default Posts;
