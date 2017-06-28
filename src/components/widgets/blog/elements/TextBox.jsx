import React from 'react';
import PropTypes from 'prop-types';

const TextBox = (props) => (
  <span>
    { props.children }
  </span>
);

TextBox.propTypes = {
  children: PropTypes.node
};

export default TextBox;
