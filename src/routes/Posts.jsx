import PostsContainer from 'containers/PostsContainer';

import { fetchPosts } from 'actions/Posts';

const Posts = {
  exact: true,
  path: '/',
  component: PostsContainer,
  prepareData: (store) => {
    const { page, step } = store.getState().posts;
    return store.dispatch(fetchPosts(page, step));
  }
};

export default Posts;
