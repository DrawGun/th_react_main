import React from 'react';
import ReactDOM from 'react-dom';
import c3 from 'c3';

class PieChart extends React.Component {
  componentDidMount() {
    this.pieChart = c3.generate({
      bindto: ReactDOM.findDOMNode(this.refs.pieChart),
      data: { columns: this.props.columns, type : 'pie' }
    });
  }

  componentWillUnmount() {
    this.pieChart.destroy();
  }

  componentWillReceiveProps(nextProps) {
    this.pieChart.load({ columns: nextProps.columns });
  }

  render() {
    return (
      <div ref='pieChart' />
    );
  }
}

PieChart.propTypes = {
  columns: React.PropTypes.array
};

PieChart.defaultProps = {
  columns: []
};


export default PieChart;
