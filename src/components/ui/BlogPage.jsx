import React from 'react';
import PropTypes from 'prop-types';

import { Helmet } from 'react-helmet';

import { Row, Col } from 'react-bootstrap';

import PieChartContainer from 'containers/PieChartContainer';
import BlogList from 'components/widgets/blog/List';
import Pagination from 'components/elements/Pagination';
import Spinner from 'components/elements/Spinner';
import Search from 'components/elements/Search';

class BlogPage extends React.Component {
  constructor(props) {
    super(props);

    this.setPage = this.setPage.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  render() {
    const { isFetching, query } = this.props;

    return (
      <div className="blog-page posts">
        <Search handleSearch={ this.handleSearch } query={ query || '' } />
        { isFetching ? <Spinner /> : this.renderPosts() }
        <Helmet title='Список постов'>
          <meta name="description" content="Helmet application" />
        </Helmet>
      </div>
    );
  }

  renderPosts() {
    const { items, maxPosts, step, page } = this.props;

    return (
      <div>
        <Row className="show-grid">
          <Col md={6}>
            <BlogList posts={items} />
          </Col>
          <Col md={6}>
            <PieChartContainer />
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

  setPage(page) {
    const { step, fetchPosts } = this.props;
    fetchPosts(page, step);
  }

  handleSearch(query) {
    const { page, step, fetchPosts } = this.props;
    fetchPosts(page, step, query);
  }
}

BlogPage.propTypes = {
  items: PropTypes.array,
  maxPosts: PropTypes.number,
  step: PropTypes.number,
  page: PropTypes.number,
  isFetching: PropTypes.bool,
  fetchPosts: PropTypes.func,
  query: PropTypes.string
};

BlogPage.defaultProps = {
  items: [],
  maxPosts: 3,
  step: 2,
  page: 1,
  isFetching: true
};

export default BlogPage;
