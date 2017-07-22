import React from 'react';
import PropTypes from 'prop-types';

import BlogItem from 'components/widgets/blog/Item';

import { postsPath } from 'helpers/routes/posts';

class Post extends React.Component {
  constructor(props) {
    super(props);

    this.state = { post: {} };
  }

  render() {
    const { post } = this.state;
    return (
      <div className="blog-page post">
        <BlogItem
          key={post.id}
          id={post.id}
          title={post.title}
          image={post.image}
          meta={post.meta}
          url={postsPath(post.id)}
          incrementLikes={this._incrementLikes} />
      </div>
    );
  }
}

Post.propTypes = {
  match: PropTypes.object,
  location: PropTypes.object,
  history: PropTypes.object
};

export default Post;
