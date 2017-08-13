import React from 'react';
import PropTypes from 'prop-types';

class Post extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { item, isFetching } = this.props;

    return (
      !isFetching && item && this.renderEditPostForm(item)
    );
  }

  renderEditPostForm(post) {
    return (
      <div className="blog-page edit-post">
        TEST
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
