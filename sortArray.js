

function sortArray(unsortedInput) {
  let sortedOutput = null;

  try {
       sortedOutput = unsortedInput
        .split(" ")

       if(sortedOutput.filter(x => isNaN(x)).length > 0){
          throw "Error with sorting";
        }

        sortedOutput = sortedOutput
        .sort((a, b) => a - b)
        .join(" ");

  } catch (err) {

    sortedOutput = "Error with sorting";
  }

  return sortedOutput;
}

module.exports = sortArray;