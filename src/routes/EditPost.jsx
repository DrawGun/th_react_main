import EditPostContainer from 'containers/EditPostContainer';
import initialLoad from 'helpers/initialLoad';
import { editPostsPath } from 'helpers/routes/posts';
import { fetchPost } from 'actions/Post';

const EditPost = {
  exact: true,
  path: editPostsPath(),
  component: EditPostContainer,
  prepareData: (store, query, params) => {
    if (initialLoad()) return;
    return store.dispatch(fetchPost(params.id));
  }
};

export default EditPost;
