import React from 'react';
import PropTypes from 'prop-types';

import { Row, Col } from 'react-bootstrap';
import { map } from 'lodash/collection';

import BlogList from 'components/widgets/blog/List';
import PieChart from 'components/widgets/blog/PieChart';
import Pagination from 'components/elements/Pagination';
import Spinner from 'components/elements/Spinner';
import Search from 'components/elements/Search';

class BlogPage extends React.Component {
  constructor(props) {
    super(props);
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
    const columns = this.pieChartColumns();
    console.log(items);
    return (
      <div className="blog-page posts">
        <Search handleSearch={ this.handleSearch } />
        <Row className="show-grid">
          <Col md={6}>
            <BlogList posts={items} />
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

  pieChartColumns() {
    const { items } = this.props;

    return map(
      items,
      (post) => ([post.title, post.meta.likes])
    );
  }
}

BlogPage.propTypes = {
  items: PropTypes.array,
  maxPosts: PropTypes.string,
  step: PropTypes.number,
  page: PropTypes.number,
  isFetching: PropTypes.bool
};

BlogPage.defaultProps = {
  items: [],
  maxPosts: '3',
  step: 2,
  page: 1,
  isFetching: true
};

export default BlogPage;
