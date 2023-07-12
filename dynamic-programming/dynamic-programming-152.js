/**
 * https://leetcode-cn.com/problems/maximum-product-subarray/
 * 给你一个整数数组 nums ，请你找出数组中乘积最大的非空连续子数组（该子数组中至少包含一个数字），并返回该子数组所对应的乘积。
 * 测试用例的答案是一个 32-位 整数。
 * 子数组是数组的连续子序列。
 * - 问题拆解
 *   数组长度为1，返回 nums[0];
 *   数组长度为2，返回 Math.max(nums[0] * nums[1], nums[0], nums[1]);
 *   数组长度大于3，返回 Math.max(nums[0] * nums[1] * nums[2], nums[0], nums[1], nums[2], nums[0] * nums[1], nums[1] * nums[2]);
 * - 状态定义
 * - 递推公式
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct1 = function (nums) {
  const dmin = [nums[0]];
  const dmax = [nums[0]];

  for (let i = 1; i < nums.length; i++) {
    dmax[i] = Math.max(dmax[i - 1] * nums[i], nums[i], dmin[i - 1] * nums[i]);
    dmin[i] = Math.min(dmin[i - 1] * nums[i], nums[i], dmax[i - 1] * nums[i]);
  }

  return Math.max(...dmax);
};

// 滚动数组
var maxProduct = function (nums) {
  let dmin = nums[0];
  let dmax = nums[0];
  let max = nums[0];

  for (let i = 1; i < nums.length; i++) {
    let mx = dmax; 
    let mi = dmin;
    dmax = Math.max(mx * nums[i], nums[i], mi * nums[i]);
    dmin = Math.min(mi * nums[i], nums[i], mx * nums[i]);
    max = Math.max(dmax, max);
  }

  return max;
};

console.log(maxProduct([2, 3, -2, 4])); // 6
console.log(maxProduct([-2, 0, -1])); // 0
console.log(maxProduct([-2, 3, -4])); // 24
console.log(maxProduct([-2])); // -2
console.log(maxProduct([3, -1, 4])); // 4
console.log(maxProduct([2, -5, -2, -4, 3])); // 24
console.log(maxProduct([0, 2])); // 2
console.log(maxProduct([1, 0, -1, 2, 3, -5, -2])); // 60
console.log(maxProduct([-2, 0, -1])); // 0

/**
 * 3 = 3
 * 3, -3, -1 = 3 dp[0], nums[0] * nums[1], nums[1]
 * 3, -1, 4, -3, -4, -12 = 4 dp[1], nums[2], nums[2] * nums[1], nums[0] * nums[1] * nums[2]
 *
 *
 * 2 = 2
 * 2, -5, -10 = 2
 * 2, -5, -2, -10, 10, 20 = 20
 * 2, -5, -2, -10, 10, 20,
 *
 * 2, -10, 20, -80, -240
 *
 * 2
 * -10, -5 = 2
 * 20, 10, -2 = 20
 * -80, -40, 8, -4 = 8
 * -240, -120, 24, -12, 3 = 24
 *
 * -2, 0, 1
 * -2, 0, 0, 0
 *
 * 0
 * 0, 0
 * 0, 0, -2
 * 0, 0, -6, 6
 * 0, 0, 30, -15,
 * 0, 0, 60, 30, 10
 *
 *
 * -10
 * 20, 10
 * -80, -40, 8
 * -240, -120, 24
 */
