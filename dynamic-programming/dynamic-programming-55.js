/**
 * https://leetcode-cn.com/problems/jump-game/
 * 给定一个非负整数数组 nums ，你最初位于数组的第一个下标 。
 * 数组中的每个元素代表你在该位置可以跳跃的最大长度。判断你是否能够到达最后一个下标。
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
  let right = 0;

  for (let i = 0; i < nums.length; i++) {
    if (i > right) {
      return false;
    }
    right = Math.max(right, i + nums[i]);
  }
  return right >= nums.length - 1;
};

console.log(canJump([2, 3, 1, 1, 4]));
console.log(canJump([3, 2, 1, 0, 4]));
console.log(canJump([0]));
console.log(canJump([0, 1]));
