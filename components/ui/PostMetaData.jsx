const PostMetaData = ({ author, created_at, updated_at }) => <div className="post-meta-data">
  <ul>
    <li>Автор поста: { author }</li>
    <li>Дата создания: { created_at }</li>
    <li>Дата обновления: { updated_at }</li>
  </ul>
</div>


PostMetaData.propTypes = {
  author: React.PropTypes.string,
  created_at: React.PropTypes.string,
  updated_at: React.PropTypes.string
};

PostMetaData.defaultProps = {
  author: "Author",
  created_at: moment().format("MM-DD-YYYY"),
  updated_at: moment().format("MM-DD-YYYY")
};
