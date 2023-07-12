/**
 * https://leetcode-cn.com/problems/delete-and-earn/
 * 给你一个整数数组 nums ，你可以对它进行一些操作。
 * 每次操作中，选择任意一个 nums[i] ，删除它并获得 nums[i] 的点数。
 * 之后，你必须删除 所有 等于 nums[i] - 1 和 nums[i] + 1 的元素。
 * 开始你拥有 0 个点数。返回你能通过这些操作获得的最大点数
 *
 * - 问题拆解
 * 数组长度为 1 时，返回 nums[0];
 * 数组长度为 2 时，如果两个数相邻, 返回 Math.max(...nums), 否则 nums[0] + nums[1]
 * 数组长度为 3 时，3 || 4 + 2 || 2 + 4
 * - 状态定义
 * - 递推方程
 * @param {number[]} nums
 * @return {number}
 */
var deleteAndEarn = function (nums) {
  const sum = new Array(Math.max(...nums) + 1).fill(0);
  let ret = 0;
  for (let value of nums) {
    sum[value] += value;
  }
  return rob(sum);
};

var rob = function (sum) {
  let len = sum.length;
  let p = sum[0];
  let q = Math.max(sum[0], sum[1]);

  for (let i = 2; i < len; i++) {
    const temp = q;
    q = Math.max(p + sum[i], q);
    p = temp;
  }

  return q;
};

console.log(deleteAndEarn([3, 4, 2])); // 6
console.log(deleteAndEarn([2, 2, 3, 3, 3, 4])); // 9
console.log(deleteAndEarn([8, 10, 4, 9, 1, 3, 5, 9, 4, 10])); // 37
console.log(deleteAndEarn([1, 1, 1, 2, 4, 5, 5, 5, 6])); // 18
