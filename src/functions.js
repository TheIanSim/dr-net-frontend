export const percRound = inp => {
  if (inp) {
    if (inp === -0.0001) {
      return "Extrapolated ";
    }
    return (inp * 100).toFixed(2);
  } else {
    return 0;
  }
};

export const keyToName = inp => {
  const string = inp.replace(/_/g, " ");
  return string.charAt(0).toUpperCase() + string.slice(1);
};

export function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

export function sortDate(a, b) {
  if (a.name > b.name) {
    return 1;
  } else if (a.name < b.name) {
    return -1;
  } else {
    return 0;
  }
}

export const formatAreaChartData = data => {
  const ytdSpending = { Singapore: 0, "Hong Kong": 0, Japan: 0 };
  const dates = {};
  const countries = new Set(["Singapore", "Hong Kong", "Japan"]);
  data.forEach(inv => {
    let { date_of_invoice, country_of_consumption, total_amount } = inv;
    if (
      date_of_invoice !== "No Prediction" &&
      country_of_consumption !== "No Prediction" &&
      total_amount !== "No Prediction"
    ) {
      total_amount = parseInt(total_amount);
      ytdSpending[country_of_consumption] += total_amount;
      if (dates[date_of_invoice]) {
        if (dates[date_of_invoice][country_of_consumption]) {
          dates[date_of_invoice][country_of_consumption] += total_amount;
        } else {
          dates[date_of_invoice][country_of_consumption] = total_amount;
        }
      } else {
        dates[date_of_invoice] = {};
        dates[date_of_invoice][country_of_consumption] = total_amount;
      }
    }
  });
  const dateArr = Object.keys(dates).map(date => {
    const out = { name: date };
    countries.forEach(c => {
      if (dates[date][c]) {
        out[c] = dates[date][c];
      } else {
        out[c] = 0;
      }
    });
    return out;
  });
  return [dateArr, ytdSpending];
};

