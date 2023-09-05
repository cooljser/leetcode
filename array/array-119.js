/**
 *
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
  let result = [1];
  for (let i = 1; i <= rowIndex; i++) {
    let temp = [1];
    for (let j = 1; j < i; j++) {
      temp[j] = result[j - 1] + result[j];
    }
    temp.push(1);
    result = temp;
  }
  return result;
};

console.log(getRow(3));
console.log(getRow(0));
console.log(getRow(1));
