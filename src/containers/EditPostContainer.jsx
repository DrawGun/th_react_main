import { connect } from 'react-redux';

import EditPost from 'components/ui/EditPost';
import { postsPath, editPostsPath } from 'helpers/routes/posts';

const stateToProps = (state) => { // eslint-disable-line
  return {
    item: state.post.entry ?
      {
        ...state.post.entry,
        url: postsPath(state.post.entry.id),
        editUrl: editPostsPath(state.post.entry.id)
      }
      : {},
    isFetching: state.post.isFetching,
    error: state.post.error
  };
};

export default connect(stateToProps)(EditPost);
