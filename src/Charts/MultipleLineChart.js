import React, { PureComponent } from "react";
import { getRandomInt } from "../functions";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";

export default function MultipleLineChart(props) {
  return (
    <LineChart
      width={900}
      height={500}
      data={props.dateDate}
      margin={{
        top: 5,
        right: 10,
        left: 20,
        bottom: 50
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis
        label={{ value: "Total Spending (SGD)", angle: -90, position: "left" }}
      />
      <Tooltip />
      <Legend />
      {props.dataCategories.map(row => (
        <Line
          type="monotone"
          dataKey={row}
          stroke={`rgb(${getRandomInt(200)}, 34, ${getRandomInt(255)})`}
        />
      ))}
    </LineChart>
  );
}
