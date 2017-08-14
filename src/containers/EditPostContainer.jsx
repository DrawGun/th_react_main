import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';

import EditPost from 'components/ui/EditPost';
import { updatePost } from 'actions/Post';

const stateToProps = (state) => { // eslint-disable-line
  const { title, createdAt, meta } = state.post.entry;

  return {
    initialValues: {
      title,
      createdAt,
      author: meta.author
    }
  };
};

const actionsToProps = (dispatch, ownProps) => ({
  updatePost: (values) => dispatch(updatePost(ownProps.match.params.id, values))
});

const validate = (values) => {
  const errors = {};

  if (values.title.length < 5)
    errors.title = 'Длина заголовка должна быть больше 5';

  return errors;
};

const warn = (values) => {
  const warnings = {};

  if (!values.author.length)
    warnings.author = 'Имя автора должно присутствовать';

  return warnings;
};

export default connect(stateToProps, actionsToProps)(
  reduxForm({
    form: 'editPost',
    validate,
    warn,
    onSubmit: updatePost
  })(EditPost)
);
