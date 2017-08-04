import React from 'react';
import PropTypes from 'prop-types';

import BlogItem from 'components/widgets/blog/Item';

class Post extends React.Component {
  constructor(props) {
    super(props);
    console.log(props, 'props');
  }

  render() {
    const { item, isFetching } = this.props;
    return (
      !isFetching && item && this.renderPost(item)
    );
  }

  renderPost(post) {
    return (
      <div className="blog-page post">
        <BlogItem
          key={post.id}
          id={post.id}
          title={post.title}
          image={post.image}
          meta={post.meta}
          url={post.url}
          incrementLikes={this._incrementLikes} />
      </div>
    );
  }
}

Post.propTypes = {
  item: PropTypes.object,
  isFetching: PropTypes.bool
};

Post.defaultProps = {
  item: {}
};

export default Post;
