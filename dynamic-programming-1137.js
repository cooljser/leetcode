/**
 * https://leetcode-cn.com/problems/n-th-tribonacci-number/
 * @param {number} n
 * @return {number}
 */
var tribonacci = function (n) {
  const ret = [0, 1, 1];

  for (let i = 2; i < n; i++) {
    ret.push(ret[i - 2] + ret[i - 1] + ret[i]);
  }

  return ret[n];
};

console.log(tribonacci(4));
console.log(tribonacci(25));
