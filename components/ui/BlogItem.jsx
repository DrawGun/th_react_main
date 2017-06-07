class BlogItem extends React.Component {

  render() {
    const { text, image, meta } = this.props;
    const { src, alt, width, height } = image;
    const { author, created_at, updated_at, likes } = meta;

    return (
      <div>
        <TextBox>
          {text}
        </TextBox>
        <Image
          src={src}
          width={width}
          height={height}
          alt={alt} />
        <PostMetaData
          author={author}
          created_at={created_at}
          updated_at={updated_at} />

        <Like
          likes={likes} />

      </div>
    )
  }

};

BlogItem.propTypes = {
  text: React.PropTypes.string,
  image: React.PropTypes.object,
  meta: React.PropTypes.object
};

BlogItem.defaultProps = {
  text: "Some text",
  image: {},
  meta: {}
};
