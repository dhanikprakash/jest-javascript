function chunkArray(arr, n) {
  var chunkedArr = [];
  var split = [];

  for (let item of arr) {
    split.push(item);

    if (split.length === n) {
      chunkedArr.push(split);
      split = [];
    }
  }
  if (split.length > 0) {
    chunkedArr.push(split);
  }
  return chunkedArr;
}
module.exports = chunkArray;
