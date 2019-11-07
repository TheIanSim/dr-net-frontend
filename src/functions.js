export const percRound = inp => {
  if (inp) {
    return (inp * 100).toFixed(2);
  } else {
    return 0;
  }
};

export const keyToName = inp => {
  const string = inp.replace(/_/g, " ");
  return string.charAt(0).toUpperCase() + string.slice(1);
};
