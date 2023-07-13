
/**
 * https://leetcode-cn.com/problems/house-robber/
 * 你是一个专业的小偷，计划偷窃沿街的房屋。每间房内都藏有一定的现金，影响你偷窃的唯一制约因素就是相邻的房屋装有相互连通的防盗系统，
 * 如果两间相邻的房屋在同一晚上被小偷闯入，系统会自动报警。
 * 给定一个代表每个房屋存放金额的非负整数数组，计算你 不触动警报装置的情况下 ，一夜之内能够偷窃到的最高金额。
 * - 问题拆解
 * - 状态定义
 * - 递推公式
 * dp[n] = Max(dp[n - 2] + nums[n], dp[n - 1]);
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  let p = nums[0];
  if (nums.length === 1) return p;
  let q = Math.max(nums[0], nums[1]);

  for (let i = 2; i < nums.length; i++) {
    let temp = q;
    q = Math.max(p + nums[i], q);
    p = temp;
  }

  return q;
};


console.log(rob([1, 2, 3, 1]));
console.log(rob([2, 7, 9, 3, 1]));
