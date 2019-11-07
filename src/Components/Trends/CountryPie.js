import React from "react";
import CustomActiveShapePieChart from "../../Charts/CustomActiveShapePieChart";

export default function CountryPie() {
  return (
    <div className="main-card">
      <div style={{ marginTop: "36px", textAlign: "center" }}>
        <h1>TOTAL EXPENSE ACROSS COUNTRIES</h1>
        <h1
          style={{
            fontSize: "4rem",
            fontFamily: "Roboto",
            fontWeight: "300",
            marginBottom: "-20px",
            color: "#02afbc"
          }}
        >
          $490,300
        </h1>
        <h4>Total Expense Processed</h4>
      </div>
      <div className="chart-container">
        <CustomActiveShapePieChart />
      </div>
    </div>
  );
}
