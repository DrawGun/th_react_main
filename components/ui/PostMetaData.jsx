const PostMetaData = ({ author, createdAt, updatedAt }) => <div className="post-meta-data">
  <ul>
    <li>Автор поста: { author }</li>
    <li>Дата создания: { createdAt }</li>
    <li>Дата обновления: { updatedAt }</li>
  </ul>
</div>


PostMetaData.propTypes = {
  author: React.PropTypes.string,
  createdAt: React.PropTypes.string,
  updatedAt: React.PropTypes.string
};

PostMetaData.defaultProps = {
  author: "Author",
  createdAt: moment().format("MM-DD-YYYY"),
  updatedAt: moment().format("MM-DD-YYYY")
};
