const chunkArray = require("./chunkArray");


test("should chunk array correctly", () => {
  expect(chunkArray([1,2,3,4,5],2)).toEqual([[1,2],[3,4],[5],]);
});
