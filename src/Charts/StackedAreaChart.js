import React, { PureComponent } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip
} from "recharts";

export default class Example extends PureComponent {
  render() {
    return (
      <AreaChart
        width={900}
        height={400}
        data={this.props.data}
        margin={{
          top: 10,
          right: 10,
          left: 45,
          bottom: 45
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis
          dataKey="name"
          label={{ value: "Date (YYYY-MM-DD)", position: "bottom" }}
        />
        <YAxis label={{ value: "Total Spending (SGD)", angle: -90, position: "left" }} />
        <Tooltip />
        <Area
          type="monotone"
          dataKey="Singapore"
          stackId="1"
          stroke="#8884d8"
          fill="#5366ac"
        />
        <Area
          type="monotone"
          dataKey="Hong Kong"
          stackId="1"
          stroke="#82ca9d"
          fill="#02afbc"
        />
        <Area
          type="monotone"
          dataKey="Japan"
          stackId="1"
          stroke="#ffc658"
          fill="#6f2282"
        />
      </AreaChart>
    );
  }
}
