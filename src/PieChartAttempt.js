import React, { Component } from 'react';
import { PieChart, Pie, Legend, Tooltip } from 'recharts';

const data = [
  {
    name: "TotalSavings",
    value: 2500,
    fill: '#eb3939'
  },
  {
    name: "SavingsRemaining",
    value: 1000,
    fill: 'rgb(15, 115, 232)'
  }
]

// function getOneDataName2(arr) {
//   for (var i = 0; i < arr.length; i++) {
//     for (var key in arr[i]) {
//     if (arr[i][key] !== 'TotalSavings') {
//      return 'yay'
//      }
//     }
//   }
  //  return //the other color
// }


class PieChartAttempt extends Component {
  render() {

    return (
      <div>
        <h1>This is the customized pie chart</h1>
        <PieChart  width={800} height={400}>
          <Pie dataKey='value' data={data}  cx={200} cy={200} innerRadius={70} outerRadius={90} label />
          <Legend />
          <Tooltip />
        </PieChart>
      </div>
    );
  };
}

export default PieChartAttempt;
