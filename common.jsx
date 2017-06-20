<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>JS Bin</title>
</head>
<body>
<script src="https://cdn.jsdelivr.net/lodash/4/lodash.min.js"></script>
<script src="https://cdn.jsdelivr.net/momentjs/2.14.1/moment-with-locales.min.js"></script>
<script src="https://fb.me/react-15.1.0.js"></script>
<script src="https://fb.me/react-dom-15.1.0.js"></script>
<div id="app"></div>
</body>
</html>

================================================================================


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
      author: "Author 2",
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
    return (
      <div>
        <BlogList posts={posts} incrementLikes={this._incrementLikes} />
      </div>
    )
  }

  _incrementLikes(postId) {
    const { posts } = this.state;
    const postIndex = _.findIndex(posts, function(p) { return p.id == postId; });
    let post = posts[postIndex];
    post.meta.likes++;
//     console.log(postIndex, post);
    posts[postIndex] = post;
//     console.log(posts);
    this.setState({posts: posts});
  }

};

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
          text={post.text}
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
  posts: React.PropTypes.array
};

BlogList.defaultProps = {
  posts: []
};

class BlogItem extends React.Component {
  constructor(props) {
    super(props);
    this._incrementLikes = this.props.incrementLikes.bind(this);
  }

  render() {
    const { id, text, image, meta } = this.props;
    const { src, alt, width, height } = image;
    const { author, createdAt, updatedAt, likes } = meta;
    console.log(likes)
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
  text: React.PropTypes.string,
  image: React.PropTypes.shape(Image.propTypes),
  meta: React.PropTypes.object
};

BlogItem.defaultProps = {
  text: "Some text",
  image: {},
  meta: {}
};

const TextBox = (props) => (
  <span>
    { props.children }
  </span>
);

TextBox.propTypes = {
  children: React.PropTypes.node
};

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

Image.propTypes = {
  src: React.PropTypes.string,
  width: React.PropTypes.string,
  height: React.PropTypes.string,
  alt: React.PropTypes.string
};

Image.defaultProps = {
  src: "https://facebook.github.io/react/img/logo.svg",
  width: "100px",
  height: "100px",
  alt: "Alt"
};

const PostMetaData = ({ author, createdAt, updatedAt }) => <div className="post-meta-data">
  <ul>
    <li>Автор поста: { author }</li>
    <li>Дата создания: { createdAt }</li>
    <li>Дата обновления: { updatedAt }</li>
  </ul>
</div>


PostMetaData.propTypes = {
  author: React.PropTypes.string,
  createdAt: React.PropTypes.string,
  updatedAt: React.PropTypes.string
};

PostMetaData.defaultProps = {
  author: "Author",
  createdAt: moment().format("MM-DD-YYYY"),
  updatedAt: moment().format("MM-DD-YYYY")
};

class Like extends React.Component {
  constructor(props) {
    super(props);

    this._incrementLikes = this._incrementLikes.bind(this);
  }

  render() {
    const { likes } = this.props;
    return (
      <div>
        <button onClick={this._incrementLikes}>
          { likes }
        </button>
      </div>
    )
  }

  _incrementLikes() {
    const { id } = this.props
    this.props.incrementLikes(id);
  }

}

Like.propTypes = {
  likes: React.PropTypes.number
};

Like.defaultProps = {
  likes: 0
};





ReactDOM.render(
  <BlogPage />,
  document.getElementById("app")
);
