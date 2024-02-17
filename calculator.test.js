const calculator = require("./calculator");

test("string with no numbers as empty string should result in 0", () => {
  expect(calculator.string_addition("")).toBe(0);
});
test("string with a single number should result in the number itself", () => {
  expect(calculator.add("1")).toBe(1);
});
test("string with a single number should result in the number itself", () => {
  expect(calculator.add("1,2,3")).toBe(6);
});
// test("string with two numbers as comma seperated string should result in their sum", () => {
//   //   expect(calculator.string_addition("1\n2,3")).toBe(3);
//   expect(calculator.string_addition("1\n2,3")).toBe([1, 2, 3]);
// });
