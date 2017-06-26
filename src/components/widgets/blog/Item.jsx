import React from 'react';
import PropTypes from 'prop-types';

import { Button } from 'react-bootstrap';

import TextBox from './elements/TextBox';
import Image from './elements/Image';
import MetaData from './elements/MetaData';
import Like from './elements/Like';

class BlogItem extends React.Component {
  constructor(props) {
    super(props);

    this._incrementLikes = this.props.incrementLikes.bind(this);
  }

  render() {
    const { id, title, image, meta } = this.props;
    const { src, alt, width, height } = image;
    const { author, createdAt, updatedAt, likes } = meta;

    return (
      <div>
        <TextBox>
          {title}
        </TextBox>
        <Image
          src={src}
          width={width}
          height={height}
          alt={alt} />
        <MetaData
          author={author}
          createdAt={createdAt}
          updatedAt={updatedAt} />

        <Like
          id={id}
          likes={likes}
          incrementLikes={this._incrementLikes} />

      </div>
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
