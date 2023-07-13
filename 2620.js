/**
 * 请你编写并返回一个 计数器 函数，它接收一个整型参数 n 。
 * 这个 计数器 函数最初返回 n，每次调用它时返回前一个值加 1 的值 ( n ,  n + 1 ,  n + 2 ，等等)。
 * @param {number} n
 * @return {Function} counter
 */
var createCounter = function (n) {
  let flag = false;
  return function () {
    if (!flag) {
      flag = true;
      return n;
    }
    n += 1;
    return n;
  };
};

const counter = createCounter(-2);
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());
