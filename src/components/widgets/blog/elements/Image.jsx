import React from 'react';
import PropTypes from 'prop-types';

class Image extends React.Component {
  render() {
    const {
      src,
      width,
      height,
      alt
    } = this.props;

    return (
      <div>
        <img
          src={src}
          width={width}
          height={height}
          alt={alt} />
      </div>
    );
  }
}

Image.propTypes = {
  src: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  alt: PropTypes.string
};

Image.defaultProps = {
  src: 'https://facebook.github.io/react/img/logo.svg',
  width: '100px',
  height: '100px',
  alt: 'Alt'
};

export default Image;
