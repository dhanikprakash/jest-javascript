const sortArray = require("./sortArray");


test("should sort basic array", () => {
  expect(sortArray("4 3 2 1")).toEqual("1 2 3 4");
});

test("should sort multiple numeric with more than one digit array", () => {
  expect(sortArray("4 3 2 11")).toEqual("2 3 4 11");
});

test("should sort negative array", () => {
  expect(sortArray("4 -3 2 11")).toEqual("-3 2 4 11");
});

