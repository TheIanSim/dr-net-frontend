import React, { PureComponent } from 'react';
import {
  BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';

const data = [
  {
    name: 'Facilities', amt: 24000,
  },
  {
    name: 'Software', amt: 22100,
  },
  {
    name: 'Hardware', amt: 22900,
  },
  {
    name: 'Consultants', amt: 20000,
  },
];

export default class Example extends PureComponent {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/90v76x08/';

  render() {
    return (
      <BarChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 20, right: 30, left: 20, bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="amt" stackId="a" fill="#8884d8" />
      </BarChart>
    );
  }
}
