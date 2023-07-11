/**
 * https://leetcode-cn.com/problems/jump-game/
 * 给定一个非负整数数组 nums ，你最初位于数组的第一个下标 。
 * 数组中的每个元素代表你在该位置可以跳跃的最大长度。判断你是否能够到达最后一个下标。
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
  if (nums.length === 1) return true;

  let step = nums[0];

  for (var i = 0, len = nums.length; i < len; i++) {
    if (step === 0) {
      break;
    }

    step = Math.max(step - 1, nums[i]);

    if (step >= len - i) {
      i == len;
    }
  }

  return i === len;
};

console.log(canJump([2, 3, 1, 1, 4]));
console.log(canJump([3, 2, 1, 0, 4]));
console.log(canJump([0]));
console.log(canJump([0, 1]));
