import React from 'react';
import PropTypes from 'prop-types';

import { Panel, Media } from 'react-bootstrap';

import Image from './elements/Image';
import MetaData from './elements/MetaData';
import Like from './elements/Like';
import Title from './elements/Title';

class BlogItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { id, title, image, meta, url } = this.props;
    const { src, alt, width, height } = image;
    const { author, createdAt, updatedAt, likes } = meta;

    return (
      <Panel header={<Title text={title} url={url} />}>
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
              likes={likes} />
          </Media.Body>
        </Media>
      </Panel>
    );
  }
}

BlogItem.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  url: PropTypes.string,
  image: PropTypes.shape(Image.propTypes),
  meta: PropTypes.object
};

BlogItem.defaultProps = {
  title: 'Some title',
  image: {},
  meta: {}
};

export default BlogItem;
