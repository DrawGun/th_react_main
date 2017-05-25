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
      (post, key) => (
        <BlogItem
          key={key}
          post={post} />
      )
    )
  }

}
