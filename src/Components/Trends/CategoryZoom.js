import React from "react";
import HighlightAndZoomLineChart from "../../Charts/HighlightAndZoomLineChart";

export default function CategoryZoom(props) {
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
          63.7%
        </h1>
        <h4>Overall Classifier Accuracy</h4>
      </div>
      <div className="chart-container">
        <HighlightAndZoomLineChart />
      </div>
    </div>
  );
}
