import React, { useEffect } from "react";
import CountryPie from "./CountryPie";
import CountryStack from "./CountryStack";
import CategoryBar from "./CategoryBar";
import CategoryLine from "./CategoryLine";

export default function Trends(props) {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between"
        }}
      >
        <CountryPie invoicesData={props.processed} />
        <CountryStack invoicesData={props.processed} />
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between"
        }}
      >
        <CategoryLine invoicesData={props.invoicesData} />
        <CategoryBar invoicesData={props.invoicesData} />
      </div>
    </>
  );
}
