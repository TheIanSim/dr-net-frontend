import React, { PureComponent } from "react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer
} from "recharts";

export default function RadarChartComp(props) {
  return (
    <ResponsiveContainer>
      <RadarChart outerRadius={100} data={props.data}>
        <PolarGrid />
        <PolarAngleAxis dataKey="category" />
        <PolarRadiusAxis />
        <Radar
          dataKey="F1"
          stroke="#5366ac"
          fill="#5366ac"
          fillOpacity={0.6}
        />
      </RadarChart>
    </ResponsiveContainer>
  );
}
