import React, { Component } from 'react';
import { RadialBarChart, RadialBar, Legend, Tooltip } from 'recharts';

const data = [
  {name: '18-24', potato: 31.47, pv: 2400, fill: '#8884d8'},
  {name: '25-29', potato: 26.69, pv: 4567, fill: '#83a6ed'},
  {name: '30-34', potato: 15.69, pv: 1398, fill: '#8dd1e1'},
  {name: '35-39', potato: 8.22, pv: 9800, fill: '#82ca9d'},
  {name: '40-49', potato: 8.63, pv: 3908, fill: '#a4de6c'},
  {name: '50+', potato: 2.63, pv: 4800, fill: '#d0ed57'},
  {name: 'unknow', potato: 6.67, pv: 4800, fill: '#ffc658'}
];

const style = {
  top: 0,
  left: 350,
  lineHeight: '24px'
};


class MyRadialBarChart extends Component {
  render() {
    return (
      <RadialBarChart width={500} height={300} cx={150} cy={150} innerRadius={20} outerRadius={140} barSize={20} data={data}>
        <RadialBar minAngle={45} background clockWise={true} dataKey='potato'/>
        <Legend iconSize={10} width={120} height={140} layout='vertical' verticalAlign='middle' wrapperStyle={style}/>
        <Tooltip />
      </RadialBarChart>
    );
  };
}

export default MyRadialBarChart;
