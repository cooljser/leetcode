/**
 * https://leetcode-cn.com/problems/plus-one/submissions/
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  let flag = true;
  for (let i = digits.length - 1; flag; i--) {
    if (i === -1) {
      digits.unshift(1);
      flag = false;
      break;
    }
    if (digits[i] + 1 === 10) {
      digits[i] = 0;
    } else {
      digits[i] = digits[i] + 1;
      flag = false;
    }
  }
  return digits;
};

console.log(plusOne([1, 2, 3]));
console.log(plusOne([4, 3, 2, 1]));
console.log(plusOne([9]));
