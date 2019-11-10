import React, { PureComponent } from "react";
import { sortDate } from "../functions";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from "recharts";


export default class Example extends PureComponent {
  render() {
    let data = this.props.data.sort(sortDate);
    data = data.slice(Math.max(data.length - 5, 1));
    data = data.map(inv => {
      return {
        name: inv.name,
        value: inv.Singapore + inv["Hong Kong"] + inv["Japan"],
        amt: 0
      };
    });
    return (
      <ResponsiveContainer>
        <LineChart data={data}>
          <Line
            type="monotone"
            dataKey="value"
            stroke="#6f2282"
            strokeWidth={2}
          />
        </LineChart>
      </ResponsiveContainer>
    );
  }
}
