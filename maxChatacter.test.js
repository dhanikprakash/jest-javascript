const maxCharacter = require("./maxCharacter");



test("should find the max letters in a word", () => {
  expect(maxCharacter("javascript")).toEqual(2);
});


test("should find the max letters in a word", () => {
  expect(maxCharacter("javascripttttt")).toEqual(5);
});
