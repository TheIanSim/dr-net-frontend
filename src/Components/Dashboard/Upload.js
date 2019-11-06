import React from "react";
import { Icon } from "antd";

export default function Upload() {
  return (
    <div className="card">
      <div style={{ textAlign: "center" }}>
        <h1>UPLOAD</h1>
        <Icon
          style={{ transform: "scale(2)", marginBottom: "24px" }}
          type="upload"
        />
        <p>Drag file here to upload Invoice</p>
      </div>
    </div>
  );
}
