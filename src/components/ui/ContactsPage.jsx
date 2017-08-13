import React from 'react';
import PropTypes from 'prop-types';

import { concat, compact } from 'lodash/array';
import { set, assign, mapValues } from 'lodash/object';
import { forEach } from 'lodash/collection';

import { isEmpty } from 'lodash/lang';
import { Row, Col, Button } from 'react-bootstrap';

import FieldGroup from 'components/elements/FieldGroup';

class Contacts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {
        values: {
          fullName: '',
          email: '',
          message: ''
        },
        errors: {
          fullName: { message: '' },
          email: { message: '' },
          message: { message: '' }
        },
        warnings: {
          fullName: { message: '' },
          email: { message: '' },
          message: { message: '' }
        }
      }
    };

    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
    this.fieldStateObj = this.fieldStateObj.bind(this);
    this.isDisabledForm = this.isDisabledForm.bind(this);
    this.createContacts = this.props.createContacts.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.setErrors(nextProps);
  }

  render() {
    const { fullName, email, message } = this.state.form.values;
    console.log(this.state);
    return (
      <Row className="show-grid about">
        <Col md={12}>
          <h1>Contacts</h1>
          <form onSubmit={this.onSubmit}>
            <FieldGroup
              id="formControlsFullName"
              name="fullName"
              type="text"
              label="Full Name"
              placeholder="Enter fullName"
              value={fullName}
              onChange={(e) => this.onChange(e, 'fullName')}
              validationState={this.fieldStateObj('fullName').state}
              help={this.fieldStateObj('fullName').message}
            />
            <FieldGroup
              id="formControlsEmail"
              name="email"
              type="email"
              label="Email address"
              placeholder="Enter email"
              value={email}
              onChange={(e) => this.onChange(e, 'email')}
              validationState={this.fieldStateObj('email').state}
              help={this.fieldStateObj('email').message}
            />
            <FieldGroup
              id="formControlsMessage"
              name="message"
              type="textarea"
              label="Message"
              componentClass="textarea"
              placeholder="Message"
              value={message}
              onChange={(e) => this.onChange(e, 'message')}
              validationState={this.fieldStateObj('message').state}
              help={this.fieldStateObj('message').message}
            />

            <Button type="submit" disabled={ this.isDisabledForm() }>
              Submit
            </Button>
          </form>
        </Col>
      </Row>
    );
  }

  setErrors(nextProps) {
    let state;
    const { errors } = nextProps;

    forEach(errors, (err) => {
      const { path, message } =  err;
      state = set(
        assign({}, this.state),
        ['form', 'errors', path, 'message'],
        message
      );
    });

    if (errors.length > 0) {
      this.setState(
        state
      );
    }
  }

  isDisabledForm() {
    const { isFetching } = this.props;
    const { form } = this.state;
    const { fullName, email, message } = this.state.form.values;
    const errorMsgs = mapValues(form.errors, function(field) {
      return field.message;
    });
    const warningMsgs = mapValues(form.warnings, function(field) {
      return field.message;
    });

    const errors = compact(concat(errorMsgs, warningMsgs));
    const fields = !fullName || !email || !message;
    return isEmpty(errors) || fields || isFetching;
  }

  fieldStateObj(field) {
    const { form } = this.state;
    const errorMsg = form.errors[field].message;
    const warningMsg = form.warnings[field].message;
    if (errorMsg.length > 0) {
      return {
        state: 'error',
        message: errorMsg
      };
    } else if (warningMsg.length > 0) {
      return {
        state: 'error',
        message: errorMsg
      };
    } else {
      return {};
    }
  }

  clearErrorsAndWarnings(field) {
    let state = set(
      assign({}, this.state),
      ['form', 'errors', field, 'message'],
      ''
    );

    state = set(
      assign({}, state),
      ['form', 'warnings', field, 'message'],
      ''
    );

    this.setState(
      state
    );
  }

  onChange(e, field) {
    this.clearErrorsAndWarnings(field);

    this.setState(
      set(
        assign({}, this.state),
        ['form', 'values', field],
        e.target.value
      )
    );
  }

  onSubmit(e) {
    e.preventDefault();

    this.createContacts(this.state.form.values);
  }
}

Contacts.propTypes = {
  match: PropTypes.object,
  location: PropTypes.object,
  history: PropTypes.object,
  createContacts: PropTypes.func,
  isFetching: PropTypes.bool,
  errors: PropTypes.array
};

export default Contacts;
