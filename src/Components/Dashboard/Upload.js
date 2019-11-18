import React from "react";
import { Icon } from "antd";

export default function Upload() {
  const onChangeHandler = ev => {
    ev.preventDefault();

    const data = new FormData();
    data.append("file", ev.target.files[0]);
    //data.append('filename', this.fileName.value);

    fetch("http://localhost:5000/upload", {
      method: "POST",
      body: data
    });
  };

  return (
    <div className="card">
      <div style={{ textAlign: "center" }}>
        <h1>
          <Icon
            style={{ transform: "scale(2)", marginBottom: "24px" }}
            type="upload"
          />
          <br />
          UPLOAD FILE
        </h1>
        <input type="file" name="file" onChange={onChangeHandler} />
      </div>
    </div>
  );
}
