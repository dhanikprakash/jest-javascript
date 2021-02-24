const cloneArray = require("./cloneArray");

test("properly clone Array", () => {
  const array = [1, 2, 3, 4];
  expect(cloneArray(array)).toEqual(array);
  expect(cloneArray(array)).not.toBe(array);
});
