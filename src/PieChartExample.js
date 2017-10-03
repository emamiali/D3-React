import React, { Component } from 'react';
import { PieChart, Pie, Legend, Tooltip } from 'recharts';


const data01 = [
  {
    potato: '2',
    name: 'Group A',
    value: 400
  }, {
    potato: '2',
    name: 'Group B',
    value: 300
  }, {
    potato: '2',
    name: 'Group C',
    value: 300
  }, {
    potato: '2',
    name: 'Group D',
    value: 200
  }
]

const data02 = [
  {
    potato: '1',
    name: 'A1',
    value: 100
  }, {
    potato: '1',
    name: 'A2',
    value: 300
  }, {
    potato: '1',
    name: 'B1',
    value: 100
  }, {
    potato: '1',
    name: 'B2',
    value: 80
  }, {
    potato: '1',
    name: 'B3',
    value: 40
  }, {
    potato: '1',
    name: 'B4',
    value: 30
  }, {
    potato: '1',
    name: 'B5',
    value: 50
  }, {
    potato: '1',
    name: 'C1',
    value: 100
  }, {
    potato: '1',
    name: 'C2',
    value: 200
  }, {
    potato: '1',
    name: 'D1',
    value: 150
  }, {
    potato: '1',
    name: 'D2',
    value: 50
  }
]

class PieChartExample extends Component {
  render() {
    return (
      <PieChart width={800} height={400}>
        <Pie dataKey="value" data={data01} cx={200} cy={200} outerRadius={60} fill="#8884d8" />
        <Pie dataKey="value" data={data02} cx={200} cy={200} innerRadius={70} outerRadius={90} fill="#82ca9d"/>
        <Legend />
        <Tooltip />
      </PieChart>
    );
  };
}

export default PieChartExample;
