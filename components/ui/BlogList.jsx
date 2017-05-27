class BlogList extends React.Component {

  render() {
    const posts = _.map(
      this.props.posts,
      (post) => (
        <BlogItem
          key={post.id}
          text={post.text}
          image={post.image} />
      )
    );

    return (
      <div>
        { posts }
      </div>
    )
  }

}
