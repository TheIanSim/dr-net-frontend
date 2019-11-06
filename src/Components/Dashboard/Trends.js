import React from "react";
import LineChart from "../../Charts/LineChart";

export default function Accuracy() {
  return (
    <div className="main-card">
      <div style={{ marginTop: "36px", textAlign: "center" }}>
        <h1>TRENDS</h1>
        <h1
          style={{
            fontSize: "4rem",
            fontFamily: "Roboto",
            fontWeight: "300",
            marginBottom: "-20px",
            color: "#6f2282"
          }}
        >
          $5,303 ↑
        </h1>
        <h4>Increase from last month</h4>
      </div>
      <div className="chart-container">
        <LineChart />
      </div>
    </div>
  );
}
