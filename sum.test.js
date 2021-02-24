const sum = require("./sum");

test("Adding two numbers correctly", () => {
  expect(sum(1, 2)).toBe(3);
});
