import React from "react";
import StackedAreaChart from "../../Charts/StackedAreaChart";
import { sortDate, numberWithCommas } from "../../functions";

export default function CountryStack(props) {

  return (
    <div className="main-card2">
      <div style={{ marginTop: "36px", textAlign: "center" }}>
        <h1>COUNTRY TRENDS</h1>
        <div
          style={{
            marginLeft: "10%",
            width: "80%",
            display: "flex",
            justifyContent: "space-around"
          }}
        >
          <div>
            <strong>Singapore</strong>
            <h1
              style={{
                fontSize: "3rem",
                fontFamily: "Roboto",
                fontWeight: "300",
                marginBottom: "-10px",
                marginTop: "-10px",
                color: "#6f2282"
              }}
            >
              ${numberWithCommas(props.invoicesData[1]["Singapore"])}
            </h1>
            <h4>Total Spending</h4>
          </div>
          <div>
            <strong>Hong Kong</strong>
            <h1
              style={{
                fontSize: "3rem",
                fontFamily: "Roboto",
                fontWeight: "300",
                marginBottom: "-10px",
                marginTop: "-10px",
                color: "#6f2282"
              }}
            >
              ${numberWithCommas(props.invoicesData[1]["Hong Kong"])}
            </h1>
            <h4>Total Spending</h4>
          </div>
          <div>
            <strong>Japan</strong>
            <h1
              style={{
                fontSize: "3rem",
                fontFamily: "Roboto",
                fontWeight: "300",
                marginBottom: "-10px",
                marginTop: "-10px",
                color: "#6f2282"
              }}
            >
              ${numberWithCommas(props.invoicesData[1]["Japan"])}
            </h1>
            <h4>Total Spending</h4>
          </div>
        </div>
      </div>
      <div className="chart-container">
        <StackedAreaChart data={props.invoicesData[0].sort(sortDate)} />
      </div>
    </div>
  );
}
