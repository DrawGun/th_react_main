import PostsContainer from 'containers/PostsContainer';

import { fetchPosts } from 'actions/Posts';

const Posts = {
  exact: true,
  path: '/',
  component: PostsContainer,
  prepareData: (store) => store.dispatch(fetchPosts())
};

export default Posts;
