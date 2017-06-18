class BlogItem extends React.Component {

  render() {
    const { text, image, meta } = this.props;
    const { src, alt, width, height } = image;
    const { author, createdAt, updatedAt, likes } = meta;

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
          createdAt={createdAt}
          updatedAt={updatedAt} />

        <Like
          likes={likes} />

      </div>
    )
  }

};

BlogItem.propTypes = {
  text: React.PropTypes.string,
  image: React.PropTypes.shape(Image.propTypes),
  meta: React.PropTypes.object
};

BlogItem.defaultProps = {
  text: "Some text",
  image: {},
  meta: {}
};
