import React from "react";
import CustomActiveShapePieChart from "../../Charts/CustomActiveShapePieChart";
import { numberWithCommas } from "../../functions";

export default function CountryPie(props) {
  const processedData = data =>
    Object.keys(data).map(country => {
      return { name: country, value: data[country] };
    });

  const outData = processedData(props.invoicesData[1]);

  const calcTotal = data => {
    let total = 0;

    data.forEach(d => {
      if (d.name !== "null") {
        total += d.value;
      }
    });
    return total;
  };

  return (
    <div className="card">
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
          ${numberWithCommas(calcTotal(outData))}
        </h1>
        <h4>Total Expense Processed</h4>
      </div>
      <div className="chart-container">
        <CustomActiveShapePieChart data={outData} />
      </div>
    </div>
  );
}
