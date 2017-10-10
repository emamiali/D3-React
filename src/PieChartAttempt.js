import React, { Component } from 'react';
import { PieChart, Pie, Legend, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: "TotalSavings",
    value: 2500,
    fill: '#550000'
  },
  {
    name: "SavingsRemaining",
    value: 1000,
    fill: '#13ddbe'
  }
]


class PieChartAttempt extends Component {
  render() {
    console.log(data);
    return (
      <div>
        <h1>This is the customized pie chart</h1>
        <ResponsiveContainer   width='33%' aspect={4.0/2.0}>
          <PieChart>
            <Pie dataKey='value' data={data}  innerRadius='55%' label outerRadius='60%' />
            <Legend verticalAlign="top" iconType="circle" align="left" margin={{ top: 0, left: 50, right: 0, bottom: 0 }}/>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>
    );
  };
}

export default PieChartAttempt;
