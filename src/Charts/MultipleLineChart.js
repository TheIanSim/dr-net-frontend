import React, { PureComponent } from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';

const data = [
  {
    name: '04/2019', Facilities: 4000, Software: 2400, Hardware: 2100, Consultants: 5400
  },
  {
    name: '05/2019', Facilities: 3000, Software: 1398, Hardware: 3210, Consultants: 4200
  },
  {
    name: '06/2019', Facilities: 5000, Software: 7800, Hardware: 2590, Consultants: 6200
  },
  {
    name: '07/2019', Facilities: 2780, Software: 3908, Hardware: 3000, Consultants: 3200
  },
  {
    name: '08/2019', Facilities: 1890, Software: 4800, Hardware: 2181, Consultants: 4500
  },
  {
    name: '09/2019', Facilities: 2390, Software: 3800, Hardware: 2500, Consultants: 2800
  },
  {
    name: '10/2019', Facilities: 3490, Software: 4300, Hardware: 3100, Consultants: 5700
  },
];

export default class Example extends PureComponent {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/xqjtetw0/';

  render() {
    return (
      <LineChart
        width={800}
        height={300}
        data={data}
        margin={{
          top: 5, right: 10, left: 50, bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="Facilities" stroke='#0088FE' activeDot={{ r: 8 }} />
        <Line type="monotone" dataKey="Software" stroke='#00C49F' />
        <Line type="monotone" dataKey="Hardware" stroke='#FFBB28' />
        <Line type="monotone" dataKey="Consultants" stroke='#FF8042' />
      </LineChart>
    );
  }
}
