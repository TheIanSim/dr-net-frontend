import React from "react";
import { Table } from "antd";
import { percRound, keyToName } from "../../functions";

export default function ModalContent(props) {
  const columns = [
    {
      title: "Field",
      dataIndex: "name",
      key: "name"
    },
    {
      title: "Value",
      dataIndex: "value",
      key: "value"
    },
    {
      title: "Confidence",
      dataIndex: "confidence",
      key: "confidence"
    }
  ];

  if (props.data) {
    let dataArray = [];
    for (let key of Object.keys(props.data)) {
      if (key.indexOf("_conf") > -1) {
        dataArray.push({
          name: keyToName(key.replace("_conf", "")),
          confidence: percRound(props.data[key]) + "%",
          value: props.data[key.replace("_conf", "")]
        });
      }
    }
    return <Table dataSource={dataArray} columns={columns} />;
  }
  return <p>nothing here</p>;
}
