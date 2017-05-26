class BlogItem extends React.Component {

  render() {
    const { text, image } = this.props;
    const { src, alt, width, height } = image;

    return (
      <div>
        <TextEl text={text} />
        <Image
          src={src}
          width={width}
          height={height}
          alt={alt} />
      </div>
    )
  }

}
