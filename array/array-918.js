/**
 * 给定一个长度为 n 的环形整数数组 nums ，返回 nums 的非空 子数组 的最大可能和 。
 * 环形数组 意味着数组的末端将会与开头相连呈环状。形式上， nums[i] 的下一个元素是 nums[(i + 1) % n] ， nums[i] 的前一个元素是 nums[(i - 1 + n) % n] 。
 * 子数组 最多只能包含固定缓冲区 nums 中的每个元素一次。形式上，对于子数组 nums[i], nums[i + 1], ..., nums[j] ，不存在 i <= k1, k2 <= j 其中 k1 % n == k2 % n 。
 * @param {number[]} nums
 * @return {number}
 */
var maxSubarraySumCircular = function (nums) {
  let max = nums[0];
  for (let i = 0; i < nums.length; i++) {
    let newArray = nums.slice(i).concat(nums.slice(0, i));
    let sum = maxSubarray(newArray);
    max = Math.max(max, sum);
  }

  return max;
};

var maxSubarray = function (nums) {
  let prev = 0;
  let max = nums[0];

  for (let i = 0; i < nums.length; i++) {
    prev = Math.max(prev + nums[i], nums[i]);
    max = Math.max(max, prev);
  }

  return max;
}

console.log(maxSubarraySumCircular([1, -2, 3, -2]));
console.log(maxSubarraySumCircular([5, -3, 5]));
console.log(maxSubarraySumCircular([3, -2, 2, -3]));
