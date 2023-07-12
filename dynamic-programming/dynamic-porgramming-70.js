/**
 * https://leetcode-cn.com/problems/climbing-stairs/
 * - 问题拆解
 * n 阶楼梯最多有多少种方案
 * 1 -> 1 = 1
 * 2 -> 1 - 1, 2 = 2
 * 3 -> 1 - 1 - 1, 1 - 2, 2 - 1 = 3
 * 4 -> 1 - 1 - 1 - 1, 1 - 2 - 1, 2 - 1 - 1, 1 - 1 - 2, 2 - 2 = 5
 * 一阶可以走 1 步或者 2 步, 所以最多需要走 n 次, 最少需要走 n / 2 || n / 2 + 1 次
 *
 * 最后一步肯定是 1 步或者 2 步，那么问题就变成了到达 n - 1 和 n - 2 阶台阶各有多少种方案
 * - 状态定义
 * - 递推方程
 * d[n] = d[n - 1] + d[n - 2]
 * - 实现
 * 时间复杂度：O(n)
 * 空间复杂度：O(1)
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  let p = 0, q = 0, r = 1;

  for (let i = 1; i <= n; i++) {
    p = q;
    q = r;
    r = p + q;
  }

  return r;
};

console.log(climbStairs(2));
console.log(climbStairs(3));
console.log(climbStairs(4));
console.log(climbStairs(5));
