const posts = [
  {
    id: 1,
    title: "Первый немного текста",
    image: {
      src: "https://facebook.github.io/react/img/logo.svg",
      alt: "Alt 1",
      width: "100px",
      height: "100px"
    },
    meta: {
      author: "Author 1",
      createdAt: moment().format("MM-DD-YYYY"),
      updatedAt: moment().format("MM-DD-YYYY"),
      likes: 1
    }
  },
  {
    id: 2,
    title: "Второй немного текста",
    image: {
      src: "https://facebook.github.io/react/img/logo.svg",
      alt: "Alt 2",
      width: "100px",
      height: "100px"
    },
    meta: {
      author: "Author 2",
      createdAt: moment().format("MM-DD-YYYY"),
      updatedAt: moment().format("MM-DD-YYYY"),
      likes: 2
    }
  },
  {
    id: 4,
    title: "Четвертый немного текста",
    image: {
      src: "https://facebook.github.io/react/img/logo.svg",
      alt: "Alt 3",
      width: "100px",
      height: "100px"
    },
    meta: {
      author: "Author 3",
      createdAt: moment().format("MM-DD-YYYY"),
      updatedAt: moment().format("MM-DD-YYYY"),
      likes: 1
    }
  }
];

class BlogPage extends React.Component {

  constructor(props) {
    super(props);

    this.state = { posts };
    this._incrementLikes = this._incrementLikes.bind(this);
  }

  render() {
    const { posts } = this.state;
    const columns = this.pieChartColumns();
    return (
      <div>
        <BlogList posts={posts} incrementLikes={this._incrementLikes} />
        <PieChart columns={columns} />
      </div>
    )
  }

  _incrementLikes(postId) {
    const { posts } = this.state;
    let post = _.find(posts, function(p) { return p.id == postId; });
    post.meta.likes++;

    this.setState({posts: posts});
  }

  pieChartColumns() {
    const { posts } = this.state;
    return _.map(posts, function(post) {
      [post.title, post.meta.likes]
    });
  }

};
