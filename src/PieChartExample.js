import React, { Component } from 'react';
import { PieChart, Pie, Legend, Tooltip } from 'recharts';


const data01 = [
	{name: 'Group A', value: 400, fill: '#8884d8',},
	{name: 'Group B', value: 300, fill: '#9cacf1',},
 	{name: 'Group C', value: 300, fill: '#8dd1e1'},
  {name: 'Group D', value: 200, fill: '#82ca9d'},
  {name: 'Group E', value: 278, fill: '#a4de6c'},
  {name: 'Group F', value: 189, fill: '#d0ed57'},
];

const data02 = [
  {name: 'Group A', value: 2400, fill: "#0c6fa7"},
  {name: 'Group B', value: 4567, fill: "#165acd"},
  {name: 'Group C', value: 1398},
  {name: 'Group D', value: 9800},
  {name: 'Group E', value: 3908},
  {name: 'Group F', value: 4800}
];

class PieChartExample extends Component {
	render () {
  	return (
    	<PieChart width={800} height={400}>
        <Pie isAnimationActive={false} data={data01} cx={200} cy={200} outerRadius={80} fill="#8884d8" label/>
        <Pie data={data02} cx={500} cy={200} innerRadius={40} outerRadius={80} fill="#82ca9d"/>
        <Tooltip/>
      </PieChart>
    );
  }
}

export default PieChartExample;
