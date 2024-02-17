function add(numbers) {
  return numbers
    .split(",")
    .map((x) => parseInt(x))
    .reduce((a, b) => a + b);
}

function string_addition(string) {
  try {
    string = string.trim();
    if (string.trim() === "") {
      return 0;
    } else if (parseInt(string) > 1000) {
      throw new Error("UNKNOWN ERROR");
    } else {
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
      const sum = nums.reduce((a, b) => a + b);
      return sum;
    }
  } catch (error) {
    return error.message;
  }
}
console.log(string_addition("10002"));

exports.add = add;
exports.string_addition = string_addition;
