import React from "react";
import StackedAreaChart from "../../Charts/StackedAreaChart";

export default function CountryStack() {
  return (
    <div className="main-card2">
      <div style={{ marginTop: "36px", textAlign: "center" }}>
        <h1>COUNTRY TRENDS</h1>
        <h1
          style={{
            fontSize: "4rem",
            fontFamily: "Roboto",
            fontWeight: "300",
            marginBottom: "-20px",
            color: "#6f2282"
          }}
        >
          $53,300 ↑
        </h1>
        <h4>Increase from last month</h4>
      </div>
      <div className="chart-container">
        <StackedAreaChart />
      </div>
    </div>
  );
}
