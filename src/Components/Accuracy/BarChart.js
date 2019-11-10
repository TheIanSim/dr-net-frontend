import React from "react";
import { percRound } from "../../functions";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from "recharts";

export default function BarChartComp(props) {
  const formatData = data => {
    const out = [];
    for (let key of Object.keys(data)) {
      if (key !== "macro avg" && key !== "weighted avg" && key !== "accuracy") {
        out.push({
          category: key,
          "f1-score": percRound(data[key]["f1-score"])
        });
      }
    }
    return out;
  };
  return (
    <ResponsiveContainer>
      <BarChart
        data={formatData(props.data)}
        layout="vertical"
        margin={{ top: 5, right: 20, left: 35, bottom: 5 }}
      >
        <XAxis type="number" />
        <YAxis type="category" dataKey="category" />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        <Legend />
        <Bar dataKey="f1-score" fill="#5366ac" />
      </BarChart>
    </ResponsiveContainer>
  );
}
