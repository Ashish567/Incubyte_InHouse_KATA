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
  string = string
    .split("")
    .filter((el) => el !== "")
    .filter((char) => !isNaN(char) === true && NaN !== char)
    .map((ch) => parseInt(ch));

  let nums = [];
  string.forEach((element) => {
    if (isNaN(element) === false) {
      nums.push(Number(element));
    }
  });
  //   return nums;
  return nums.reduce((a, b) => a + b);
}

exports.add = add;
exports.string_addition = string_addition;
