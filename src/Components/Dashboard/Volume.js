import React from "react";
import PieChart from "../../Charts/PieChart";

export default function Accuracy(props) {
  return (
    <div className="main-card">
      <div style={{ marginTop: "36px", textAlign: "center" }}>
        <h1>INVOICES</h1>
        <h1
          style={{
            fontSize: "4rem",
            fontFamily: "Roboto",
            fontWeight: "300",
            marginBottom: "-20px",
            color: "#02afbc"
          }}
        >
          {
            props.invoicesData.filter(
              invoice => invoice.status !== "unprocessed"
            ).length
          }
        </h1>
        <h4>Total Documents Processed</h4>
      </div>
      <div className="chart-container">
        <PieChart
          data={props.invoicesData.filter(
            invoice =>
              invoice.status !== "unprocessed" && invoice.category
          )}
        />
      </div>
    </div>
  );
}
