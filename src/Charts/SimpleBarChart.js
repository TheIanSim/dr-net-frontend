import React, { PureComponent } from "react";
import { getRandomInt } from "../functions";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";

const SimpleBarChart = props => {
  return (
    <BarChart
      width={500}
      height={350}
      data={props.data}
      margin={{
        top: 5,
        right: 20,
        left: 20,
        bottom: 5
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="Amount" fill="#6F2282">
        {props.data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={"#6F2282"} />
        ))}
      </Bar>
    </BarChart>
  );
};

export default SimpleBarChart;
