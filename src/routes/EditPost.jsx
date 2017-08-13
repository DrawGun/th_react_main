import EditPostContainer from 'containers/EditPostContainer';
import { editPostsPath } from 'helpers/routes/posts';

const EditPost = {
  exact: true,
  path: editPostsPath(),
  component: EditPostContainer,
  prepareData: (store) => { // eslint-disable-line
    return;
  }
};

export default EditPost;
