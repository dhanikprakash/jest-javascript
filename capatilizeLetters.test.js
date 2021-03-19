const capatilizeLetters = require("./capatilizeLetters");


test("should capatilize string correctly", () => {
  expect(capatilizeLetters("love javascript")).toEqual("Love Javascript");
});

