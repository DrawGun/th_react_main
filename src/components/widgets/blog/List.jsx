import React from 'react';
import PropTypes from 'prop-types';

import { map } from 'lodash/collection';

import BlogItem from './Item';

class List extends React.Component {
  constructor(props) {
    super(props);
    // this._incrementLikes = this.props.incrementLikes.bind(this);
  }

  render() {
    const posts = map(
      this.props.posts,
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
  posts: PropTypes.array,
  incrementLikes: PropTypes.func
};

List.defaultProps = {
  posts: []
};

export default List;
