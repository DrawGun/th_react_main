import React from 'react';
import PropTypes from 'prop-types';

import { ButtonToolbar, Button, Glyphicon } from 'react-bootstrap';

class Like extends React.Component {
  constructor(props) {
    super(props);

    // this._incrementLikes = this._incrementLikes.bind(this);
  }

  render() {
    const { likes } = this.props;

    return (
      <ButtonToolbar>
        <Button onClick={this._incrementLikes}>
          { likes } <Glyphicon glyph="thumbs-up" />
        </Button>
      </ButtonToolbar>
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
