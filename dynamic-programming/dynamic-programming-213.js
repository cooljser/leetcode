/**
 * https://leetcode-cn.com/problems/house-robber-ii/
 * 你是一个专业的小偷，计划偷窃沿街的房屋，每间房内都藏有一定的现金。
 * 这个地方所有的房屋都 围成一圈 ，这意味着第一个房屋和最后一个房屋是紧挨着的。
 * 同时，相邻的房屋装有相互连通的防盗系统，如果两间相邻的房屋在同一晚上被小偷闯入，系统会自动报警 。
 *
 * 只有一间房，最大值：nums[0]
 * 两间房，只能偷一间，最大值为：Math.max(nums[0], nums[1])
 * 三间房及以上：
 * 如果偷第一间房，则意味着要舍弃最后一间房，所以可偷的房间范围变成了 [0, len - 2];
 * 如果不偷第一间放，那么可偷的房间范围变成了 [1, len - 1];
 * 所以取这两种场景的最大值即可
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  let len = nums.length;
  if (len === 1) return nums[0];
  if (len === 2) return Math.max(nums[0], nums[1]);

  return Math.max(robRange(nums, 0, len - 2), robRange(nums, 1, len - 1));
};

var robRange = function (nums, start, end) {
  let p = nums[start];
  let q = Math.max(nums[start], nums[start + 1]);

  for (let i = start + 2; i <= end; i++) {
    const temp = q;
    q = Math.max(p + nums[i], q);
    p = temp;
  }
  return q;
};

console.log(rob([2, 3, 2]));
console.log(rob([1, 2, 3, 1]));
console.log(rob([1, 2, 3]));
console.log(rob([1, 2, 1, 1]));
