import React from 'react';
import PropTypes from 'prop-types';

import { Row, Col } from 'react-bootstrap';

class About extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Row className="show-grid about">
        <Col md={12}>
          Добавил страницу About, как просили в доп задании к 5 уроку.
        </Col>
      </Row>
    );
  }
}

About.propTypes = {
  match: PropTypes.object,
  location: PropTypes.object,
  history: PropTypes.object
};

export default About;
