import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

class PieChart extends React.Component {
  componentDidMount() {
    if (__CLIENT__) { // eslint-disable-line
      const c3 = require('c3');
      this.pieChart = c3.generate({
        bindto: ReactDOM.findDOMNode(this.refs.pieChart),
        data: { columns: this.props.columns, type : 'pie' }
      });
    }
  }

  componentWillUnmount() {
    this.pieChart.destroy();
  }

  componentWillReceiveProps(nextProps) {
    this.pieChart.unload();
    this.pieChart.load({ columns: nextProps.columns });
  }

  render() {
    return (
      <div ref='pieChart' />
    );
  }
}

PieChart.propTypes = {
  columns: PropTypes.array
};

PieChart.defaultProps = {
  columns: []
};


export default PieChart;
