import React from 'react';
import PropTypes from 'prop-types';

import { Grid } from 'react-bootstrap';

const Container = ({ children }) => (
  <Grid>
    { children }
  </Grid>
);

Container.propTypes = {
  children: PropTypes.node
};

export default Container;
