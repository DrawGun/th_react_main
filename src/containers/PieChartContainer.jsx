import { connect } from 'react-redux';
import { map, find } from 'lodash/collection';

import PieChart from 'components/widgets/blog/PieChart';

const stateToProps = (state) => {
  const likes = state.like.entries;

  return {
    columns: map(
      state.posts.entries,
      (post) => (
        [post.title, find(likes, (like) => (like.id == post.id)).likes]
      )
    )
  };
};

export default connect(stateToProps)(PieChart);
