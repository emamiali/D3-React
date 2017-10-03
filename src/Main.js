import React, { Component } from 'react';
import MyRadialBarChart from './MyRadialBarChart';
import PieChartExample from './PieChartExample';

class Main extends Component {
  render() {
    return (
      <div>
        <MyRadialBarChart />
        <PieChartExample />
      </div>
    );
  };
}

export default Main;
