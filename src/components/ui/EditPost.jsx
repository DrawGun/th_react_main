import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form';

import { Button } from 'react-bootstrap';

import FieldGroup from 'components/elements/FieldGroup';

class renderField extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      input, label, name, type, meta: { touched, error, warning } // eslint-disable-line
    } = this.props;

    let fieldState;
    if (error) {
      fieldState = 'error';
    }

    if (warning) {
      fieldState = 'warning';
    }

    return (
      <FieldGroup
        id={`formControlsFull${name}`}
        name={name}
        type={type}
        label={label}
        placeholder={`Enter ${name}`}
        validationState={fieldState}
        help={error || warning}
        {...input}
      />
    );
  }
}

renderField.propTypes = {
  input: PropTypes.object,
  label: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.string,
  meta: PropTypes.object
};

class EditPost extends React.Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.props.handleSubmit.bind(this);
  }

  render() {
    return (
      <div className="blog-page edit-post">
        <h1>Edit Post</h1>

        <form onSubmit={ this.handleSubmit }>
          <Field
            label="Title"
            component={renderField}
            type="text"
            name="title" />

          <Field
            label="CreatedAt"
            component={renderField}
            type="text"
            name="createdAt" />

          <Field
            label="Author"
            component={renderField}
            type="text"
            name="author" />

          <Button type="submit">
            Submit
          </Button>
        </form>
      </div>
    );
  }
}

EditPost.propTypes = {
  item: PropTypes.object,
  handleSubmit: PropTypes.func
};

EditPost.defaultProps = {
  item: {}
};

export default EditPost;























// s
