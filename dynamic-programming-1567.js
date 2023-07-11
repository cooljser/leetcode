/**
 * 给你一个整数数组 nums ，请你求出乘积为正数的最长子数组的长度。
 * 一个数组的子数组是由原数组中零个或者更多个连续数字组成的数组。
 * 请你返回乘积为正数的最长子数组长度。
 * - 问题拆解
 *   全是正数 || (包含偶数个负数 && 不包含 0)
 * @param {number[]} nums
 * @return {number}
 */
var getMaxLen = function (nums) {
  const positive = [0];
  const negative = [0];

  if (nums[0] > 0) {
    positive[0] = 1;
  } else if (nums[0] < 0) {
    negative[0] = 1;
  }

  let maxLength = positive[0];

  for (let i = 1, len = nums.length; i < len; i++) {
    if (nums[i] > 0) {
      positive[i] = positive[i - 1] + 1;
      negative[i] = negative[i - 1] > 0 ? negative[i - 1] + 1 : 0;
    } else if (nums[i] < 0) {
      positive[i] = negative[i - 1] > 0 ? negative[i - 1] + 1 : 0;
      negative[i] = positive[i - 1] + 1;
    } else {
      positive[i] = 0;
      negative[i] = 0;
    }
    maxLength = Math.max(maxLength, positive[i]);
  }

  return maxLength;
};

console.log(getMaxLen([1, -2, -3, 4])); // 4
console.log(getMaxLen([-1, -2, -3, 0, 1])); // 2
