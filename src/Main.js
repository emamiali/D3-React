import React, { Component } from 'react';
import MyRadialBarChart from './MyRadialBarChart';
import PieChartExample from './PieChartExample';
import BudgetRings from './PieChartAttempt';

class Main extends Component {
  render() {
    return (
      <div>
        {/* <MyRadialBarChart />
        <PieChartExample /> */}
        <BudgetRings />
      </div>
    );
  };
}

export default Main;
