class BlogList extends React.Component {

  render() {
    const posts = this.getPosts();
    return (
      <div>
        { posts }
      </div>
    )
  }

  getPosts() {
    const { posts } = this.props

    return _.map(
      posts,
      (post) => (
        <BlogItem
          key={post.id}
          text={post.text}
          image={post.image} />
      )
    )
  }

}
