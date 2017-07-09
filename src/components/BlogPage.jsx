import React from 'react';

import { Row, Col } from 'react-bootstrap';

import { map } from 'lodash/collection';

import request from 'superagent';

import BlogList from 'components/widgets/blog/List';
import PieChart from 'components/widgets/blog/PieChart';

class BlogPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = { posts: [] };
    this._incrementLikes = this._incrementLikes.bind(this);
  }

  componentDidMount() {
    this.fetchPosts();
  }

  render() {
    const { posts } = this.state;
    const columns = this.pieChartColumns();
    return (
      <div className="blog-page">
        <Row className="show-grid">
          <Col md={12}>
            <BlogList posts={posts} incrementLikes={this._incrementLikes} />
          </Col>
        </Row>

        <Row className="show-grid">
          <Col md={12}>
            <PieChart columns={columns} />
          </Col>
        </Row>
      </div>
    );
  }

  fetchPosts() {
    request.get(
      'http://localhost:3001/',
      {},
      (err, res) => this.setState({ posts: res.body })
    );
  }

  _incrementLikes(postId) {
    const { posts } = this.state;
    const updatedPosts = map(
      posts,
      (post) => (
        (post.id === postId) ?
          { ...post, meta: { ...post.meta, likes: post.meta.likes + 1 }} : post)
    );

    this.setState({posts: updatedPosts});
  }

  pieChartColumns() {
    const { posts } = this.state;

    return map(
      posts,
      (post) => ([post.title, post.meta.likes])
    );
  }
}

export default BlogPage;
