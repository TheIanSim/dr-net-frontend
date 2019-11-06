import React from "react";
import RadarChart from "../../Charts/RadarChart";

export default function Accuracy(props) {
  return (
    <div
      className="main-card"
      onClick={() => props.handlePageChange({ key: "ACCURACY" })}
    >
      <div style={{ marginTop: "36px", textAlign: "center" }}>
        <h1>ACCURACY</h1>
        <h1
          style={{
            fontSize: "4rem",
            fontFamily: "Roboto",
            fontWeight: "300",
            marginBottom: "-20px",
            color: "#5366ac"
          }}
        >
          63.7%
        </h1>
        <h4>Overall Classifier Accuracy</h4>
      </div>
      <div className="chart-container">
        <RadarChart />
      </div>
    </div>
  );
}
