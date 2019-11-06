import React from "react";

export default function ValueLabel(props) {
  return (
    <div>
      <h1
        style={{
          fontSize: "2rem",
          fontFamily: "Roboto",
          fontWeight: "300",
          marginBottom: "-10px",
          color: props.color
        }}
      >
        {props.value}
      </h1>
      <h4>{props.label}</h4>
    </div>
  );
}
