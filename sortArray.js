

function sortArray(unsortedInput) {
  let sortedOutput = null;

  try {
       sortedOutput = unsortedInput
        .split(" ")
        .sort((a, b) => a - b)
        .join(" ");

  } catch (err) {
    sortedOutput = "Error with sorting";
  }

  return sortedOutput;
}

module.exports = sortArray;