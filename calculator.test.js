const calculator = require("./calculator");

test("string with no numbers as empty string should result in 0", () => {
  expect(calculator.string_addition("")).toBe(0);
});
test("string with a single number should result in the number itself", () => {
  expect(calculator.string_addition("1")).toBe(1);
});
test("string with a single number should result in the number itself", () => {
  expect(calculator.string_addition("1,2,3")).toBe(6);
});
test("string with two numbers as comma seperated string should result in their sum", () => {
  expect(calculator.string_addition("1\n2,3")).toBe(6);
});

test("string with two numbers as comma seperated string and various delimeters should result in their sum", () => {
  expect(calculator.string_addition("//[***]\n1***2***3")).toBe(6);
});

// test("string with two numbers as comma seperated string should result in their sum", () => {
//   expect(
//     calculator.string_addition(
//       "//[delim1][delim2]\n” for example “//[*][%]\n1*2%3"
//     )
//   ).toBe(6);
// });
test("string having values greater than 1000 should throw error", () => {
  expect(calculator.string_addition("10002")).toBe("UNKNOWN ERROR");
});
test("string having values less than 0 should throw error", () => {
  expect(calculator.string_addition("-3")).toBe("negatives not allowed");
});
