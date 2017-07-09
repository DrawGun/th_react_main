import React from 'react';
import PropTypes from 'prop-types';

import { Panel, Media } from 'react-bootstrap';

import TextBox from './elements/TextBox';
import Image from './elements/Image';
import MetaData from './elements/MetaData';
import Like from './elements/Like';
import Link from 'components/elements/Link';

import { postsPath } from 'helpers/routes/posts';

class BlogItem extends React.Component {
  constructor(props) {
    super(props);

    this._incrementLikes = this.props.incrementLikes.bind(this);
  }

  render() {
    const { id, title, image, meta } = this.props;
    const { src, alt, width, height } = image;
    const { author, createdAt, updatedAt, likes } = meta;
    const postTitle = this.postTitle(id, title);

    return (
      <Panel header={postTitle}>
        <Media>
          <Media.Left align="top">
            <Image
              src={src}
              width={width}
              height={height}
              alt={alt} />
          </Media.Left>
          <Media.Body>
            <MetaData
              author={author}
              createdAt={createdAt}
              updatedAt={updatedAt} />

            <Like
              id={id}
              likes={likes}
              incrementLikes={this._incrementLikes} />
          </Media.Body>
        </Media>
      </Panel>
    );
  }

  postTitle(id, title) {
    return (
      <Link to={postsPath(id)}>
        <TextBox>
          {title}
        </TextBox>
      </Link>
    );
  }
}

BlogItem.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  image: PropTypes.shape(Image.propTypes),
  meta: PropTypes.object,
  incrementLikes: PropTypes.func
};

BlogItem.defaultProps = {
  title: 'Some title',
  image: {},
  meta: {}
};

export default BlogItem;
