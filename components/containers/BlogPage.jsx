const posts = [
  { text: "Первый немного текста", link: "https://facebook.github.io/react/img/logo.svg" },
  { text: "Второй немного текста", link: "https://facebook.github.io/react/img/logo.svg" },
  { text: "Четвертый немного текста", link: "https://facebook.github.io/react/img/logo.svg" }
];

class BlogPage extends React.Component {

  constructor(props) {
    super(props);

    this.state = { posts }
  }

  render() {
    return (
      <div>
        <BlogList posts={this.state.posts} />
      </div>
    )
  }

}
