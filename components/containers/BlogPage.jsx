const posts = [
  {
    id: 1,
    text: "Первый немного текста",
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
    text: "Второй немного текста",
    image: {
      src: "https://facebook.github.io/react/img/logo.svg",
      alt: "Alt 2",
      width: "100px",
      height: "100px"
    },
    meta: {
      author: "Author 1",
      createdAt: moment().format("MM-DD-YYYY"),
      updatedAt: moment().format("MM-DD-YYYY"),
      likes: 2
    }
  },
  {
    id: 4,
    text: "Четвертый немного текста",
    image: {
      src: "https://facebook.github.io/react/img/logo.svg",
      alt: "Alt 3",
      width: "100px",
      height: "100px"
    },
    meta: {
      author: "Author 1",
      createdAt: moment().format("MM-DD-YYYY"),
      updatedAt: moment().format("MM-DD-YYYY"),
      likes: 1
    }
  }
];

class BlogPage extends React.Component {

  constructor(props) {
    super(props);

    this.state = { posts }
  }

  render() {
    const { posts } = this.state;

    return (
      <div>
        <BlogList posts={posts} />
      </div>
    )
  }

};
