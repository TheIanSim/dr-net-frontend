export const percRound = inp => (inp * 100).toFixed(2);

export const keyToName = inp => {
  const string = inp.replace(/_/g, " ");
  return string.charAt(0).toUpperCase() + string.slice(1);
};
