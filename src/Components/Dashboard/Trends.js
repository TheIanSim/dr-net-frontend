import React from "react";
import LineChart from "../../Charts/LineChart";
import { numberWithCommas } from "../../functions";

export default function Accuracy(props) {
  const thisYearInvoices = props.processed[0].filter(inv => {
    return inv.name.indexOf("2019") > -1;
  });

  const getTotal = inv => {
    let ytdTotal = 0;
    if (inv) {
      inv.forEach(element => {
        ytdTotal += element["Singapore"];
        ytdTotal += element["Hong Kong"];
        ytdTotal += element["Japan"];
      });
    }

    return ytdTotal;
  };

  return (
    <div
      className="main-card"
      onClick={() => props.handlePageChange({ key: "TRENDS" })}
    >
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
          ${numberWithCommas(getTotal(thisYearInvoices))}
        </h1>
        <h4>Year to Date Spending</h4>
      </div>
      <div className="chart-container">
        <LineChart data={thisYearInvoices} />
      </div>
    </div>
  );
}
