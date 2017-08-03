import PostContainer from 'containers/PostContainer';

import { postsPath } from 'helpers/routes/posts';
import { fetchPost } from 'actions/Post';

const Post = {
  exact: true,
  path: postsPath(),
  component: PostContainer,
  prepareData: (store, query, params) => {
    return store.dispatch(fetchPost(params.id));
  }
};

export default Post;
