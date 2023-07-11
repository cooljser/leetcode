/**
 * https://leetcode-cn.com/problems/remove-element/
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  let result = nums.length;
  for (let i = 0; i < result;) {
    if (val === nums[i]) {
      nums[i] = nums[result - 1];
      result--;
    } else {
      i++;
    }
  }

  return result;
};

console.log(removeElement([3, 2, 2, 3], 3)); // 2
console.log(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2)); // 5
