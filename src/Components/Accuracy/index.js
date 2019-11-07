import React, { useEffect, useState } from "react";
import RadarChart from "../../Charts/RadarChart";
import BarChart from "./BarChart";
import MetricsTable from "./MetricsTable";
import ValueLabel from "./ValueLabel";
import { percRound } from "../../functions";

export default function Accuracy(props) {
  const { accuracyData: data } = props;

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between"
      }}
    >
      <div className="main-card">
        <div style={{ marginTop: "36px", textAlign: "center" }}>
          <h1>AGGREGATE ACCURACY</h1>
          <h1
            style={{
              fontSize: "4rem",
              fontFamily: "Roboto",
              fontWeight: "300",
              marginBottom: "-20px",
              color: "#5366ac"
            }}
          >
            {percRound(data.accuracy) + "%"}
          </h1>
          <h4>Overall Classifier Accuracy</h4>
          <hr style={{ margin: "40px" }} />
          <ValueLabel
            value={data["macro avg"] && data["macro avg"].support}
            label="Total Tokens Classified"
            color="#5366ac"
          />
          <hr style={{ margin: "40px" }} />
          {/* <div
            style={{
              marginLeft: "25%",
              width: "50%",
              display: "flex",
              justifyContent: "space-between"
            }}
          >
            <ValueLabel value={192} label="True Positives" color="#006f3c" />
            <ValueLabel value={2401} label="True Negatives" color="#006f3c" />
          </div>
          <div
            style={{
              marginLeft: "25%",
              width: "50%",
              display: "flex",
              justifyContent: "space-between"
            }}
          >
            <ValueLabel value={201} label="False Positives" color="#bf212f" />
            <ValueLabel value={1124} label="False Negatives" color="#bf212f" />
          </div> */}
          <p>Weighted Average</p>
          <div
            style={{
              marginLeft: "10%",
              width: "80%",
              display: "flex",
              justifyContent: "space-between"
            }}
          >
            <ValueLabel
              value={
                data["weighted avg"] &&
                percRound(data["weighted avg"].precision) + "%"
              }
              label="Precision"
              color="grey"
            />
            <ValueLabel
              value={
                data["weighted avg"] &&
                percRound(data["weighted avg"].recall) + "%"
              }
              label="Recall"
              color="grey"
            />
            <ValueLabel
              value={
                data["weighted avg"] &&
                percRound(data["weighted avg"]["f1-score"]) + "%"
              }
              label="F1"
              color="grey"
            />
          </div>
          <hr style={{ margin: "40px" }} />
          <p>Macro Average</p>
          <div
            style={{
              marginLeft: "10%",
              width: "80%",
              display: "flex",
              justifyContent: "space-between"
            }}
          >
            <ValueLabel
              value={
                data["macro avg"] &&
                percRound(data["macro avg"].precision) + "%"
              }
              label="Precision"
              color="grey"
            />
            <ValueLabel
              value={
                data["macro avg"] && percRound(data["macro avg"].recall) + "%"
              }
              label="Recall"
              color="grey"
            />
            <ValueLabel
              value={
                data["macro avg"] &&
                percRound(data["macro avg"]["f1-score"]) + "%"
              }
              label="F1"
              color="grey"
            />
          </div>
        </div>
      </div>
      <div className="main-card">
        <div style={{ marginTop: "36px", textAlign: "center" }}>
          <h1>CATEGORY BREAKDOWN</h1>
          <h4>Figures in Percent</h4>

          <div className="chart-container-tall">
            <BarChart data={data} />
          </div>
        </div>
      </div>
      <div className="main-card">
        <div style={{ marginTop: "36px", textAlign: "center" }}>
          <h1>CLASSIFIER METRICS</h1>
        </div>
        <MetricsTable data={data} />
      </div>
    </div>
  );
}
