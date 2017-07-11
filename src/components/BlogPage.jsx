import React from 'react';

import { Row, Col, FormControl } from 'react-bootstrap';

import { map } from 'lodash/collection';

import request from 'superagent';

import BlogList from 'components/widgets/blog/List';
import PieChart from 'components/widgets/blog/PieChart';

import Paginations from 'components/elements/Paginations';
import Spinner from 'components/elements/Spinner';

class BlogPage extends React.Component {
  constructor(props) {
    super(props);

    const postsStep = 2;
    this.state = { posts: [], step: postsStep, page: 1, loading: true };
    this.incrementLikes = this.incrementLikes.bind(this);
    this.setPage = this.setPage.bind(this);
    this.handleSearchByPageTitle = this.handleSearchByPageTitle.bind(this);
  }

  componentDidMount() {
    this.fetchPosts();
  }

  render() {
    return (
      <div>
        { this.state.loading && this.loader() }
        { !this.state.loading && this.renderPosts() }
      </div>
    );
  }

  loader() {
    return (
      <Spinner />
    );
  }

  renderPosts() {
    const { posts, maxPosts, step, page } = this.state;
    const columns = this.pieChartColumns();

    return (
      <div className="blog-page posts">
        <form className="search-by-post-title">
          <FormControl
            type="text"
            value={this.state.value}
            placeholder="Поиск по заголовку статьи"
            onChange={this.handleSearchByPageTitle} />
        </form>
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
            <Paginations
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
    const self = this;
    const { page, step, query } = this.state;

    let url = `http://localhost:3001/?page=${page}&step=${step}`;
    if (query) {
      url += `&query=${query}`;
    }

    request.get(url)
      .then(function(res) {
        self.setState({
          posts: res.body,
          maxPosts: res.headers['max-posts'],
          loading: false
        });
      })
      .catch(function(e) {
        console.log(e.res);
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
    const self = this;
    this.setState({ page, loading: true }, function() {
      self.fetchPosts();
    });
  }

  handleSearchByPageTitle(e) {
    const self = this;
    this.setState({ query: e.target.value }, function() {
      self.fetchPosts();
    });
  }
}

export default BlogPage;
