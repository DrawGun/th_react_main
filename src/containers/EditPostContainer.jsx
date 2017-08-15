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

export default connect(stateToProps)(
  reduxForm({
    form: 'editPost',
    validate,
    warn,
    onSubmit: (values, dispatch, props) => (
      dispatch(updatePost(props.match.params.id, values))
    )
  })(EditPost)
);
