import React from "react";
import SimpleBarChart from "../../Charts/SimpleBarChart";
import { numberWithCommas } from "../../functions";

export default function CategoryBar(props) {
  const formatData = data => {
    const categories = {};
    let highest = [0, "", ""];

    data.forEach(row => {
      let { category, total_amount, id, date_of_invoice } = row;
      total_amount = parseInt(total_amount);
      if (total_amount > highest[0]) {
        highest = [total_amount, id, date_of_invoice];
      }
      if (categories[category] && !isNaN(total_amount)) {
        categories[category] += total_amount;
      } else {
        categories[category] = total_amount;
      }
    });

    const dataArr = Object.keys(categories).map(key => ({
      name: key,
      Amount: categories[key]
    }));

    return [dataArr.filter(r => r.name !== "null"), highest];
  };

  const formattedDate = formatData(props.invoicesData);

  return (
    <div className="card">
      <div style={{ marginTop: "36px", textAlign: "center" }}>
        <h1>EXPENSE BY CATEGORY</h1>
        <h4>In SGD</h4>
        <div className="chart-container">
          <SimpleBarChart data={formatData(props.invoicesData)[0]} />
        </div>
        <h1>Single Biggest Expense</h1>
        <h1
          style={{
            fontSize: "3rem",
            fontFamily: "Roboto",
            fontWeight: "300",
            marginBottom: "-10px",
            marginTop: "-10px",
            color: "#8884d8"
          }}
        >
          ${numberWithCommas(formattedDate[1][0])}
        </h1>
        <h4>
          {formattedDate[1][1]} <strong>{formattedDate[1][2]}</strong>
        </h4>
      </div>
      <br />
      <br />
      <br />
    </div>
  );
}
