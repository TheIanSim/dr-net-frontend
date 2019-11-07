import React, { useEffect } from "react";
import CountryPie from "./CountryPie";
import CountryStack from "./CountryStack";
import CategoryBar from "./CategoryBar";
import CategoryLine from "./CategoryLine"


export default function Trends(props) {

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between"
        }}
      >
        <CountryPie handlePageChange={props.handlePageChange} />
        <CountryStack />

      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between"
        }}
      >
        <CategoryBar  />
        <CategoryLine />

      </div>
    </>
  );
}
