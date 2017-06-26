import React from 'react';
import PropTypes from 'prop-types';

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
    );
  }

  _incrementLikes() {
    const { id } = this.props;
    this.props.incrementLikes(id);
  }
}

Like.propTypes = {
  id: PropTypes.number,
  likes: PropTypes.number,
  incrementLikes: PropTypes.func
};

Like.defaultProps = {
  likes: 0
};

export default Like;
