import React from 'react';
import PropTypes from 'prop-types';

import Helmet from 'react-helmet';

import BlogItem from 'components/widgets/blog/Item';

class Post extends React.Component {
  constructor(props) {
    super(props);
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
          editUrl={post.editUrl}
          incrementLikes={this._incrementLikes} />

        <Helmet title={post.title}>
          <meta name="description" content="Helmet application" />
        </Helmet>
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
