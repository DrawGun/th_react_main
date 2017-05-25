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
