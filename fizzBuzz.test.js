const fizzBuzz = require("./fizzBuzz");


test("should return FizzBuzz correctly", () => {

  expect(fizzBuzz()).toEqual("FizzBuzzFizzFizzBuzz");
});