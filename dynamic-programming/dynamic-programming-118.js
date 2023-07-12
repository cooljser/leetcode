/**
 * https://leetcode-cn.com/problems/pascals-triangle/
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
  const result = [];

  for (let i = 0; i < numRows; i++) {
    const row = new Array(i + 1).fill(1);
    for (let j = 1; j < row.length - 1; j++) {
      row[j] = result[i - 1][j - 1] + result[i -1][j];
    }
    result.push(row)
  }

  return result;
};

console.log(generate(5));
console.log(generate(1));
