/**
 * https://leetcode-cn.com/problems/search-insert-position/
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  let n = nums.length;
  let l = 0, r = n - 1;

  while(l <= r) {
    let mid = l + ((r - l) >> 1);

    if (nums[mid] < target) {
      l = mid + 1;
    } else {
      r = mid - 1;
    }
  }

  return l;
};

console.log(searchInsert([1, 3, 5, 6], 5)); // 2
console.log(searchInsert([1, 3, 5, 6], 2)); // 1
console.log(searchInsert([1, 3, 5, 6], 7)); // 4
console.log(searchInsert([1, 3, 5, 6], 0)); // 0
console.log(searchInsert([3, 5, 7, 9, 10], 8)); // 3
