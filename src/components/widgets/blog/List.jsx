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
      this.props.posts,
      (post) => (
        <div className="blog-page post">
          <BlogItem
            key={post.id}
            id={post.id}
            title={post.title}
            image={post.image}
            meta={post.meta}
            editUrl={post.editUrl}
            url={post.url} />
        </div>
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
  posts: PropTypes.array
};

List.defaultProps = {
  posts: []
};

export default List;
