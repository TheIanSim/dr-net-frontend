import React from "react";
import SimpleBarChart from "../../Charts/SimpleBarChart";

export default function CategoryBar() {
  return (
    <div className="main-card">
      <div style={{ marginTop: "36px", textAlign: "center" }}>
        <h1>HIGHEST EXPENSE BY A CATEGORY</h1>
        <h1
          style={{
            fontSize: "4rem",
            fontFamily: "Roboto",
            fontWeight: "300",
            marginBottom: "-20px",
            color: "#02afbc"
          }}
        >
          $50,000
        </h1>
        <h4>Highest Expense Processed</h4>
      </div>
      <div className="chart-container">
        <SimpleBarChart />
      </div>
    </div>
  );
}
