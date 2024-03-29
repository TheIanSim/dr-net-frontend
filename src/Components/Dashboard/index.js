import React from "react";
import Accuracy from "./Accuracy";
import Volume from "./Volume";
import Trends from "./Trends";
import Upload from "./Upload";

export default function Dashboard(props) {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between"
        }}
      >
        <Accuracy
          handlePageChange={props.handlePageChange}
          data={props.accuracyData}
        />
        <Volume
          invoicesData={props.invoicesData}
          handlePageChange={props.handlePageChange}
        />
        <Trends
          invoicesData={props.invoicesData}
          processed={props.processed}
          handlePageChange={props.handlePageChange}
        />
      </div>
      <Upload />
    </>
  );
}
