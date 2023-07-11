/**
 * https://leetcode-cn.com/problems/fibonacci-number/
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
  const ret = [0, 1];

  for (let i = 1; i < n; i++) {
    ret.push(ret[i - 1] + ret[i]);
  }

  return ret[n];
};

console.log(fib(2));
console.log(fib(3));
console.log(fib(4));
