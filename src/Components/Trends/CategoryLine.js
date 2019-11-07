import React from "react";
import MultipleLineChart from "../../Charts/MultipleLineChart";

export default function CategoryLine(props) {
  return (
    <div
      className="main-card2"
      onClick={() => props.handlePageChange({ key: "ACCURACY" })}
    >
      <div style={{ marginTop: "36px", textAlign: "center" }}>
        <h1>CATEGORY TRENDS</h1>
        <h1
          style={{
            fontSize: "4rem",
            fontFamily: "Roboto",
            fontWeight: "300",
            marginBottom: "-20px",
            color: "#5366ac"
          }}
        >
          43.9%
        </h1>
        <h4>Overall Percentage Change</h4>
      </div>
      <div className="chart-container">
        <MultipleLineChart />
      </div>
    </div>
  );
}
