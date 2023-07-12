/**
 * https://leetcode-cn.com/problems/min-cost-climbing-stairs/
 * - 问题拆解
 * 最后一步只有两种可能，要么是在倒数第二阶楼梯上，要么是在倒数第一阶楼梯上
 * - 状态定义
 * 定义到达第 n 阶楼梯的话费为 d[n]
 * - 递推公式
 * d[n] = Math.max(d[n - 1] + cost[n - 1], d[n - 2] + cost[n - 2]) + 最后一阶需要加上 cost[n])
 * - 实现
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function (cost) {
  let prev = 0;
  let ret = 0;

  for (let i = 2; i <= cost.length; i++) {
    const next = Math.min(prev + cost[i - 2], ret + cost[i - 1]);
    prev = ret;
    ret = next;
  }

  return ret;
};
// var minCostClimbingStairs = function (cost) {
// let ret = [0, 0];

// for (let i = 2; i <= cost.length; i++) {
// ret[i] =  Math.min(ret[i - 1] + cost[i - 1], ret[i - 2] + cost[i - 2]);
// }

// return ret[cost.length];
// };

console.log(minCostClimbingStairs([10, 15, 20])); // 15
console.log(minCostClimbingStairs([1, 100, 1, 1, 1, 100, 1, 1, 100, 1])); // 6
