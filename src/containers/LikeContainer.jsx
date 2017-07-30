import { connect } from 'react-redux';

import { get, find } from 'lodash';

import Like from 'components/elements/Likes';
import { addLike } from 'actions/Like';

const stateToProps = (state, ownProps) => ({
  amount: get(
    find(state.like.entries, { id: ownProps.itemId }),
    'likes',
    0
  )
});

const actionsToProps = (dispatch, ownProps) => ({
  addLike: () => dispatch(addLike(ownProps.itemId, ownProps.itemType))
});

export default connect(stateToProps, actionsToProps)(Like);
