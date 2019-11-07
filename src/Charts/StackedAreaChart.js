import React, { PureComponent } from 'react';
import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip,
} from 'recharts';

const data = [
  {
    name: '04/2019', sg: 240000, hk: 124000, jp: 92000,
  },
  {
    name: '05/2019', sg: 230000, hk: 139800, jp: 122100,
  },
  {
    name: '06/2019', sg: 220000, hk: 198000, jp: 119000,
  },
  {
    name: '07/2019', sg: 278000, hk: 139000, jp: 120000,
  },
  {
    name: '08/2019', sg: 189000, hk: 148000, jp: 81000,
  },
  {
    name: '09/2019', sg: 239000, hk: 180000, jp: 75000,
  },
  {
    name: '10/2019', sg: 200000, hk: 170000, jp: 85000,
  },
];

export default class Example extends PureComponent {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/c1rLyqj1/';

  render() {
    return (
      <AreaChart
        width={800}
        height={400}
        data={data}
        margin={{
          top: 10, right: 10, left: 50, bottom: 50,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Area type="monotone" dataKey="sg" stackId="1" stroke="#8884d8" fill="#8884d8" />
        <Area type="monotone" dataKey="hk" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
        <Area type="monotone" dataKey="jp" stackId="1" stroke="#ffc658" fill="#ffc658" />
      </AreaChart>
    );
  }
}
