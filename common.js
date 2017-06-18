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
      created_at: moment().format(),
      updated_at: moment().format(),
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
      created_at: moment().format(),
      updated_at: moment().format(),
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
      created_at: moment().format(),
      updated_at: moment().format(),
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

}
class BlogItem extends React.Component {

  render() {
    const { text, image, meta } = this.props;
    const { src, alt, width, height } = image;
    const { author, created_at, updated_at, likes } = meta;

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
          created_at={created_at}
          updated_at={updated_at} />

        <Like
          likes={likes} />

      </div>
    )
  }

}
const TextBox = (props) => (
  <span>
    { props.children }
  </span>
);
const PostMetaData = ({ author, created_at, updated_at }) => <div className="post-meta-data">
  <ul>
    <li>Автор поста: { author }</li>
    <li>Дата создания: { created_at }</li>
    <li>Дата обновления: { updated_at }</li>
  </ul>
</div>
class Like extends React.Component {
  constructor(props) {
    super(props);

    this.state = { likes: props.likes }
    this._incrementLikes = this._incrementLikes.bind(this);
  }

  render() {
    return (
      <div>
        <button onClick={this._incrementLikes}>
          { this.state.likes }
        </button>
      </div>
    )
  }

  _incrementLikes() {
    this.setState({ likes: this.state.likes + 1 })
  }

}



class Image extends React.Component {

  render() {
    const {
      src,
      width,
      height,
      alt
    } = this.props;

    return (
      <div>
        <img
          src={src}
          width={width}
          height={height}
          alt={alt} />
      </div>
    )
  }

}
ReactDOM.render(
  <BlogPage />,
  document.getElementById("app")
);
