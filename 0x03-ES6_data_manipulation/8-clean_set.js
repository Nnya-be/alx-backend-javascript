module.exports = function cleanSet(set, startString) {
  if (
    !set ||
    !(set instanceof Set) ||
    typeof startString !== "string" ||
    startString.length === 0
  ) {
    return "";
  }

  const result = [];
  for (const value of set) {
    if (typeof value === "string" && value.startsWith(startString)) {
      const subVal = value.slice(startString.length);

      if (subVal && subVal !== value) {
        result.push(subVal);
      }
    }
  }

  return result.join("-");
};
