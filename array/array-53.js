/**
 * https://leetcode-cn.com/problems/maximum-subarray/
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  let result = nums[0];
  let prev = nums[0];

  for (let i = 1, len = nums.length; i < len; i++) {
    const num = nums[i];
    const max = Math.max(prev + num, num);

    if (max > result) {
      result = max;
    }
    
    prev = max;
  }

  return result;
};

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
console.log(maxSubArray([1]));
console.log(maxSubArray([-1]));
console.log(maxSubArray([5, 4, -1, 7, 8]));
console.log(maxSubArray([-1, 1, 2, 1]));
