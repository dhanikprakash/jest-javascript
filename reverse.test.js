const reverse = require("./reverse");

test("should reverse string correctly", () => {
  expect(reverse.reverseString("hello")).toEqual("olleh");
});

test("should reverse positive int correctly", () => {
  expect(reverse.reverseInt("123456")).toEqual(654321);
});


test("should reverse negative int correctly", () => {
  expect(reverse.reverseInt("-12345678")).toEqual(-87654321);
});