import React from 'react';
import PropTypes from 'prop-types';

import BlogItem from 'components/widgets/blog/Item';

import { postsPath } from 'helpers/routes/posts';

import request from 'superagent';

class Post extends React.Component {
  constructor(props) {
    super(props);

    this.state = { post: {} };
    // this._incrementLikes = this._incrementLikes.bind(this);
  }

  componentDidMount() {
    this.fetchPost();
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

  fetchPost() {
    const postId = this.props.match.params.id;
    const self = this;
    request.get(
      `http://localhost:3001/posts/${postId}`
    ).end(function(err, res) {
      self.setState({ post: res.body });
    });
  }

  _incrementLikes(_ignoredPostId) {
    const { post } = this.state;
    const likes = post.meta.likes + 1;
    this.setState({ post: { ...post, meta: { ...post.meta, likes }}});
  }
}

Post.propTypes = {
  match: PropTypes.object,
  location: PropTypes.object,
  history: PropTypes.object
};

export default Post;
