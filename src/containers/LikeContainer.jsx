import { connect } from 'react-redux';

import { get, find } from 'lodash';

import Like from 'components/elements/Likes';
import { addLike } from 'actions/Like';

const stateToProps = (state, ownProps) => ({
  amount: get(
    find(state.posts.entries, { id: ownProps.itemId }),
    'meta.likes',
    get(state, 'post.entry.meta.likes', 0)
  )
});

const actionsToProps = (dispatch, ownProps) => ({
  addLike: () => dispatch(addLike(ownProps.itemId, ownProps.itemType))
});

export default connect(stateToProps, actionsToProps)(Like);
