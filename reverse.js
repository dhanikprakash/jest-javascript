
function reverseInt(int) {
  const revString = int.toString().split("").reverse().join("");
  return parseInt(revString) * Math.sign(int);
}

function reverseString(str) {
 return  str.toString().split("").reverse().join("");
 }
 
module.exports = {reverseString, reverseInt};