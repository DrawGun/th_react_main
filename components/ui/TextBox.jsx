const TextBox = (props) => (
  <span>
    { props.children }
  </span>
);

TextBox.propTypes = {
  children: React.PropTypes.node
};
