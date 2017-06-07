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

Like.propTypes = {
  likes: React.PropTypes.number
};

Like.defaultProps = {
  likes: 0
};

