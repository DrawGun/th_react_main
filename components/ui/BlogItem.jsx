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
  title: React.PropTypes.string,
  image: React.PropTypes.shape(Image.propTypes),
  meta: React.PropTypes.object,
  incrementLikes: React.PropTypes.func
};

BlogItem.defaultProps = {
  title: "Some title",
  image: {},
  meta: {}
};
