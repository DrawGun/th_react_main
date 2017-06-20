class BlogItem extends React.Component {
  constructor(props) {
    super(props);

    this._incrementLikes = this.props.incrementLikes.bind(this);
  }

  render() {
    const { id, text, image, meta } = this.props;
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
          id={id}
          likes={likes}
          incrementLikes={this._incrementLikes} />

      </div>
    )
  }

};

BlogItem.propTypes = {
  text: React.PropTypes.string,
  image: React.PropTypes.shape(Image.propTypes),
  meta: React.PropTypes.object,
  incrementLikes: React.PropTypes.func
};

BlogItem.defaultProps = {
  text: "Some text",
  image: {},
  meta: {}
};
