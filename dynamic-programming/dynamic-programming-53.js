/*
 * https://leetcode-cn.com/problems/maximum-subarray/
 * 给你一个整数数组 nums ，请你找出一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。
 * 子数组是数组中的一个连续部分。
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray1 = function (nums) {
  const dp = [nums[0]];
  for (let i = 1; i < nums.length; i++) {
    dp[i] = Math.max(dp[i - 1] + nums[i], nums[i]);
  }

  return Math.max(...dp);
};

// 滚动数组
var maxSubArray = function (nums) {
  let p = nums[0];
  let max = nums[0];

  for (let i = 1; i < nums.length; i++) {
    p = Math.max(p + nums[i], nums[i]);
    max = Math.max(p, max);
  }

  return max;
};

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])); // 6
console.log(maxSubArray([1])); // 1
console.log(maxSubArray([5, 4, -1, 7, 8])); // 23
