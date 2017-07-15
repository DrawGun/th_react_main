import React from 'react';

import { Row, Col } from 'react-bootstrap';

import { map } from 'lodash/collection';

import { postsPath } from 'helpers/routes/posts';

import request from 'superagent';

import BlogList from 'components/widgets/blog/List';
import PieChart from 'components/widgets/blog/PieChart';

import Pagination from 'components/elements/Pagination';
import Spinner from 'components/elements/Spinner';
import Search from 'components/elements/Search';

class BlogPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = { posts: [], step: 2, page: 1, loading: true };
    this.incrementLikes = this.incrementLikes.bind(this);
    this.setPage = this.setPage.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  componentDidMount() {
    this.fetchPosts();
  }

  render() {
    return (
      <div>
        { this.state.loading ? <Spinner /> : this.renderPosts() }
      </div>
    );
  }

  renderPosts() {
    const { posts, maxPosts, step, page } = this.state;
    const columns = this.pieChartColumns();

    return (
      <div className="blog-page posts">
        <Search handleSearch={ this.handleSearch } />
        <Row className="show-grid">
          <Col md={6}>
            <BlogList posts={posts} incrementLikes={this.incrementLikes} />
          </Col>
          <Col md={6}>
            <PieChart columns={columns} />
          </Col>
        </Row>

        <Row className="show-grid text-center">
          <Col md={12}>
            <Pagination
              maxItems={ maxPosts }
              step={ step }
              activePage={ page }
              onSelect={this.setPage} />
          </Col>
        </Row>
      </div>
    );
  }

  fetchPosts() {
    const { page, step, query } = this.state;

    let url = `http://localhost:3001/?page=${page}&step=${step}`;
    if (query) {
      url += `&query=${query}`;
    }

    request.get(url)
      .then((res) => {
        const posts = map(
          res.body,
          (post) => (
            { ...post, url: postsPath(post.id) }
          )
        );

        this.setState({
          posts,
          maxPosts: res.headers['max-posts'],
          loading: false
        });
      })
      .catch(function(e) {
        console.log(e);
      });
  }

  incrementLikes(postId) {
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

  setPage(page) {
    this.setState({ page, loading: true }, () => (this.fetchPosts()));
  }

  handleSearch(value) {
    this.setState({ query: value }, () => (this.fetchPosts()));
  }
}

export default BlogPage;
