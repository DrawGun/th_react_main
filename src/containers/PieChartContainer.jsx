import { connect } from 'react-redux';
import { map } from 'lodash/collection';

import PieChart from 'components/widgets/blog/PieChart';

const stateToProps = (state) => ({
  columns: map(
    state.posts.entries,
    (post) => ([post.title, post.meta.likes])
  )
});

export default connect(stateToProps)(PieChart);
