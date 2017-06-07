class BlogList extends React.Component {

  render() {
    const posts = _.map(
      this.props.posts,
      (post) => (
        <BlogItem
          key={post.id}
          text={post.text}
          image={post.image}
          meta={post.meta} />
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
  posts: React.PropTypes.array
};

BlogList.defaultProps = {
  posts: []
};
