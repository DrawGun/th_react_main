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
    )
  }

}

Image.propTypes = {
  src: React.PropTypes.string,
  width: React.PropTypes.string,
  height: React.PropTypes.string,
  alt: React.PropTypes.string
};

Image.defaultProps = {
  src: "https://facebook.github.io/react/img/logo.svg",
  width: "100px",
  height: "100px",
  alt: "Alt"
};
