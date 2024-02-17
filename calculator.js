function add(numbers) {
  return numbers
    .split(",")
    .map((x) => parseInt(x))
    .reduce((a, b) => a + b);
}

function string_addition(string) {
  string = string.trim();
  string = string
    .split("")
    .filter((el) => el !== "")
    .join("");
  if (string.trim() === "") {
    return 0;
  }
  let nums = [];
  string.split(",").forEach((element) => {
    if (typeof element === "number") {
      nums.push(Number(element));
    }
  });
  //   return nums;
  return nums.reduce((a, b) => a + b);
}

exports.add = add;
exports.string_addition = string_addition;
