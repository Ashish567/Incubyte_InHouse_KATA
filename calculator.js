function add(numbers) {
  return numbers
    .split(",")
    .map((x) => parseInt(x))
    .reduce((a, b) => a + b);
}

function string_addition(string) {
  string = string.trim();
  if (string.trim() === "") {
    return 0;
  }
  let nums = [1];

  return nums.reduce((a, b) => a + b);
}

exports.add = add;
exports.string_addition = string_addition;
