import React, { useEffect, useState } from "react";
import RadarChart from "../../Charts/RadarChart";
import { percRound } from "../../functions";

export default function Accuracy(props) {
  const { socket } = props;
  const [data, setData] = useState({});

  useEffect(() => {
    socket.emit("req_metrics");
    socket.on("accuracy_metrics", data =>
      setData(JSON.parse(data)["Neural Network"])
    );
  }, []);

  const formatData = data => {
    const out = [];
    for (let key of Object.keys(data)) {
      if (!new Set(["macro avg", "accuracy", "weighted avg"]).has(key)) {
        out.push({
          category: key,
          F1: percRound(data[key]["f1-score"])
        });
      }
    }
    return out;
  };

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
          {percRound(data.accuracy)}%
        </h1>
        <h4>Overall Classifier Accuracy</h4>
      </div>
      <div className="chart-container">
        <RadarChart data={formatData(data)} />
      </div>
    </div>
  );
}
