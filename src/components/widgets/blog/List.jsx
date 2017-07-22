import React from 'react';
import PropTypes from 'prop-types';

import { map } from 'lodash/collection';

import BlogItem from './Item';

class List extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const posts = map(
      this.props.items,
      (post) => (
        <BlogItem
          key={post.id}
          id={post.id}
          title={post.title}
          image={post.image}
          meta={post.meta}
          url={post.url}
          incrementLikes={this._incrementLikes} />
      )
    );

    return (
      <div>
        { posts }
      </div>
    );
  }
}

List.propTypes = {
  items: PropTypes.array,
  incrementLikes: PropTypes.func
};

List.defaultProps = {
  items: []
};

export default List;
