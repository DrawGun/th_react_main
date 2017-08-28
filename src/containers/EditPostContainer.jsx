import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';

import EditPost from 'components/ui/EditPost';
import { updatePost } from 'actions/Post';

const stateToProps = (state) => { // eslint-disable-line
  const entry = state.post.entry ? state.post.entry : {};
  const { title, createdAt, meta } = entry;
  const author = meta ? meta.author : '';

  return {
    initialValues: {
      title,
      createdAt,
      author
    }
  };
};

const validate = (values) => {
  const errors = {};

  if (values.title && values.title.length < 5)
    errors.title = 'Длина заголовка должна быть больше 5';

  return errors;
};

const warn = (values) => {
  const warnings = {};

  if (!values.author || !values.author.length)
    warnings.author = 'Имя автора должно присутствовать';

  return warnings;
};

export default connect(stateToProps)(
  reduxForm({
    form: 'editPost',
    validate,
    warn,
    enableReinitialize: true,
    onSubmit: (values, dispatch, props) => (
      dispatch(updatePost(props.match.params.id, values))
    )
  })(EditPost)
);
