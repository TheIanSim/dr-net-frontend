import React, { PureComponent } from "react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer
} from "recharts";

const data = [
  {
    category: "Others",
    Accuracy: 14
  },
  {
    category: "Invoice Date",
    Accuracy: 35
  },
  {
    category: "Invoice Currency",
    Accuracy: 62
  },
  {
    category: "Tax Amount",
    Accuracy: 93
  },
  {
    category: "Provider Name",
    Accuracy: 48
  },
  {
    category: "PO Number",
    Accuracy: 73
  },
  {
    category: "Consumption Country",
    Accuracy: 49
  },
  {
    category: "Account Number",
    Accuracy: 14
  },
  {
    category: "Amount (inc. Tax)",
    Accuracy: 54
  },
  {
    category: "Consumption Period",
    Accuracy: 65
  }
];

export default class Example extends PureComponent {
  render() {
    return (
      <ResponsiveContainer>
        <RadarChart outerRadius={100} data={data}>
          <PolarGrid />
          <PolarAngleAxis dataKey="category" />
          <PolarRadiusAxis />
          <Radar
            dataKey="Accuracy"
            stroke="#5366ac"
            fill="#5366ac"
            fillOpacity={0.6}
          />
        </RadarChart>
      </ResponsiveContainer>
    );
  }
}
