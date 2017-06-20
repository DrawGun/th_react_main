class BlogList extends React.Component {
  constructor(props) {
    super(props);

    this._incrementLikes = this.props.incrementLikes.bind(this);
  }

  render() {
    const posts = _.map(
      this.props.posts,
      (post) => (
        <BlogItem
          key={post.id}
          id={post.id}
          title={post.title}
          image={post.image}
          meta={post.meta}
          incrementLikes={this._incrementLikes} />
      )
    );

    return (
      <div>
        { posts }
      </div>
    )
  }

};

BlogList.propTypes = {
  posts: React.PropTypes.array,
  incrementLikes: React.PropTypes.func
};

BlogList.defaultProps = {
  posts: []
};
