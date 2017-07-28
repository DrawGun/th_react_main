import React from 'react';
import PropTypes from 'prop-types';

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
    const { isFetching } = this.props;

    return (
      <div>
        { isFetching ? <Spinner /> : this.renderPosts() }
      </div>
    );
  }

  renderPosts() {
    const { items, maxPosts, step, page } = this.props;

    return (
      <div className="blog-page posts">
        <Search handleSearch={ this.handleSearch } />
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

  setPage () {
    return console.log('setPage()');
  }

  handleSearch() {
    return console.log('handleSearch()');
  }
}

BlogPage.propTypes = {
  items: PropTypes.array,
  maxPosts: PropTypes.number,
  step: PropTypes.number,
  page: PropTypes.number,
  isFetching: PropTypes.bool,
  setPage: PropTypes.func
};

BlogPage.defaultProps = {
  items: [],
  maxPosts: 3,
  step: 2,
  page: 1,
  isFetching: true
};

export default BlogPage;
