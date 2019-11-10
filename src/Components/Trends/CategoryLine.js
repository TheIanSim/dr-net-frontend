import React from "react";
import MultipleLineChart from "../../Charts/MultipleLineChart";
import { sortDate } from "../../functions";

export default function CategoryLine(props) {
  const formatData = data => {
    const dates = {};

    data.forEach(row => {
      let { category, total_amount, id, date_of_invoice } = row;
      total_amount = parseInt(total_amount);

      if (date_of_invoice !== "No Prediction" && !isNaN(total_amount)) {
        if (dates[date_of_invoice]) {
          if (dates[date_of_invoice][category]) {
            dates[date_of_invoice][category] += total_amount;
          } else {
            dates[date_of_invoice][category] = total_amount;
          }
        } else {
          dates[date_of_invoice] = {};
          dates[date_of_invoice][category] = total_amount;
        }
      }
    });

    const dataArr = Object.keys(dates).map(date => ({
      name: date,
      ...dates[date]
    }));

    return dataArr.filter(r => r.name !== "null");
  };

  const get_categories = data => {
    const cats = new Set([]);
    data.forEach(row => {
      const k = Object.keys(row);
      k.forEach(i => cats.add(i));
    });
    cats.delete("name");
    cats.delete("null");
    return Array.from(cats);
  };

  const format_date_cat = data => {
    const categories = new Set(get_categories(data));
    return data
      .map(datum => {
        const temp = {};
        categories.forEach(cat => {
          temp[cat] = 0;
        });
        return { ...temp, ...datum };
      })
      .sort(sortDate);
  };

  const formatIncrease = data => {
    const out = [];
    const len = data.length;
    const last = data[len - 1];
    const secondLast = data[len - 2];
    Object.keys(last).forEach(key => {
      if (key !== "name" && key !== "null") {
        out.push({ category: key, difference: last[key] - secondLast[key] });
      }
    });
    return out;
  };

  const formattedData = formatData(props.invoicesData);

  return (
    <div className="main-card2">
      <div style={{ marginTop: "36px", textAlign: "center" }}>
        <h1>CATEGORY TRENDS</h1>
        <div
          style={{
            marginLeft: "10%",
            width: "80%",
            display: "flex",
            justifyContent: "space-around"
          }}
        >
          {formatIncrease(format_date_cat(formattedData)).map(d => (
            <div>
              <strong>{d.category}</strong>
              <h1
                style={{
                  fontSize: "3rem",
                  fontFamily: "Roboto",
                  fontWeight: "300",
                  marginBottom: "-10px",
                  color: "#5366ac"
                }}
              >
                ${d.difference}
              </h1>
              <h4>Monthly Change</h4>
            </div>
          ))}
        </div>
      </div>
      <div className="chart-container">
        <MultipleLineChart
          dataCategories={get_categories(formattedData)}
          dateDate={format_date_cat(formattedData)}
        />
      </div>
    </div>
  );
}
