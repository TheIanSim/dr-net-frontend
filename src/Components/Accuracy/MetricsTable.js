import React from "react";
import { Table, Divider, Tag } from "antd";
import { percRound } from "../../functions";

const { Column, ColumnGroup } = Table;

const data = [
  {
    category: "Others",
    Precision: Math.random().toFixed(2),
    Recall: Math.random().toFixed(2),
    F1: Math.random().toFixed(2),
    Support: (Math.random() * 100).toFixed(0)
  },
  {
    category: "Invoice Date",
    Precision: Math.random().toFixed(2),
    Recall: Math.random().toFixed(2),
    F1: Math.random().toFixed(2),
    Support: (Math.random() * 100).toFixed(0)
  },
  {
    category: "Invoice Currency",
    Precision: Math.random().toFixed(2),
    Recall: Math.random().toFixed(2),
    F1: Math.random().toFixed(2),
    Support: (Math.random() * 100).toFixed(0)
  },
  {
    category: "Tax Amount",
    Precision: Math.random().toFixed(2),
    Recall: Math.random().toFixed(2),
    F1: Math.random().toFixed(2),
    Support: (Math.random() * 100).toFixed(0)
  },
  {
    category: "Provider Name",
    Precision: Math.random().toFixed(2),
    Recall: Math.random().toFixed(2),
    F1: Math.random().toFixed(2),
    Support: (Math.random() * 100).toFixed(0)
  },
  {
    category: "PO Number",
    Precision: Math.random().toFixed(2),
    Recall: Math.random().toFixed(2),
    F1: Math.random().toFixed(2),
    Support: (Math.random() * 100).toFixed(0)
  },
  {
    category: "Consumption Country",
    Precision: Math.random().toFixed(2),
    Recall: Math.random().toFixed(2),
    F1: Math.random().toFixed(2),
    Support: (Math.random() * 100).toFixed(0)
  },
  {
    category: "Account Number",
    Precision: Math.random().toFixed(2),
    Recall: Math.random().toFixed(2),
    F1: Math.random().toFixed(2),
    Support: (Math.random() * 100).toFixed(0)
  },
  {
    category: "Amount (inc. Tax)",
    Precision: Math.random().toFixed(2),
    Recall: Math.random().toFixed(2),
    F1: Math.random().toFixed(2),
    Support: (Math.random() * 100).toFixed(0)
  },
  {
    category: "Consumption Period",
    Precision: Math.random().toFixed(2),
    Recall: Math.random().toFixed(2),
    F1: Math.random().toFixed(2),
    Support: (Math.random() * 100).toFixed(0)
  }
];

export default function MetricsTable(props) {
  const formatData = data => {
    const out = [];
    for (let key of Object.keys(data)) {
      if (! new Set(["macro avg", "accuracy", "weighted avg"]).has(key)) {
        out.push({
          category: key,
          F1: percRound(data[key]["f1-score"]),
          Recall: percRound(data[key]["recall"]),
          Support: data[key]["support"],
          Precision: percRound(data[key]["precision"])
        });
      }
    }
    return out;
  };
  return (
    <Table dataSource={formatData(props.data)}>
      <Column title="Category" dataIndex="category" key="category" />
      <Column title="Precision" dataIndex="Precision" key="Precision" />
      <Column title="Recall" dataIndex="Recall" key="Recall" />
      <Column title="F1" dataIndex="F1" key="F1" />
      <Column title="Support" dataIndex="Support" key="Support" />
    </Table>
  );
}
