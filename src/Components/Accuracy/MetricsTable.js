import React from "react";
import { Table } from "antd";
import { percRound } from "../../functions";

const { Column } = Table;

export default function MetricsTable(props) {
  const formatData = data => {
    const out = [];
    for (let key of Object.keys(data)) {
      if (!new Set(["macro avg", "accuracy", "weighted avg"]).has(key)) {
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
