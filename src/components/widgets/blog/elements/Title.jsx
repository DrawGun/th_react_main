import React from 'react';
import PropTypes from 'prop-types';

import TextBox from './TextBox';
import Link from 'components/elements/Link';

const Title = ({ text, url }) => (
  <Link wrapperClassNames='wrapper-link' linkClassNamse='link' to={url}>
    <TextBox>
      { text }
    </TextBox>
  </Link>
);

Title.propTypes = {
  text: PropTypes.string,
  url: PropTypes.string
};

export default Title;
