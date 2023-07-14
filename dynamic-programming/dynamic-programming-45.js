/**
 * https://leetcode-cn.com/problems/jump-game-ii/
 * 给你一个非负整数数组 nums ，你最初位于数组的第一个位置。
 * 数组中的每个元素代表你在该位置可以跳跃的最大长度。
console.log(jump([1, 2,3,4])); // 2
 * - 问题拆解：
 * 如果数组长度为 1，那么返回 0 次；
 * 如果数组长度为 2，也返回一次；
 * 如果数组长度大于 2，可能是 1 次或 2 次，取决于 nums[0] 是否大于等于 2,
 * 想要跳到最后一个元素的位置，需要跳跃 n - 1 步
 * - 状态定义:
 * 设前 n 个元素还能跳跃的最远步数为 dpn
 * - 递推公式：
 * dpn = Math.max(nums[i] + n, dp[n - 1])
 * @param {number[]} nums
 * @return {number}
 */
var jump = function (nums) {
  let step = 0;
  let maxPosition = 0;
  let end = 0;
  for (let i = 0; i < nums.length - 1; i++) {
    maxPosition = Math.max(maxPosition, nums[i] + i);
    if (i === end) {
      end = maxPosition;
      step++;
    }
  }
  return step;
};

console.log(jump([2, 3, 1, 1, 4])); // 2
console.log(jump([2, 3, 0, 1, 4])); // 2
console.log(jump([2, 3])); // 1
console.log(jump([1, 2, 3])); // 2
console.log(jump([3, 2, 1])); // 1
console.log(jump([1, 2, 3, 4])); // 2
console.log(jump([1, 2, 1, 1, 1])); // 3
console.log(jump([7, 0, 9, 6, 9, 6, 1, 7, 9, 0, 1, 2, 9, 0, 3])); //2
