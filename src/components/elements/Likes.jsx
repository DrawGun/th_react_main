import React from 'react';
import PropTypes from 'prop-types';

import { ButtonToolbar, Button, Glyphicon } from 'react-bootstrap';

const Likes = ({ addLike, amount }) => (
  <ButtonToolbar>
    <Button
      onClick={() => addLike()}
      style={{cursor: 'pointer'}}>
      {`likes: ${amount}`} <Glyphicon glyph="thumbs-up" />
    </Button>
  </ButtonToolbar>
);

Likes.propTypes = {
  addLike: PropTypes.func,
  amount: PropTypes.number
};

Likes.defaultProps = {
  likes: 0
};

export default Likes;
