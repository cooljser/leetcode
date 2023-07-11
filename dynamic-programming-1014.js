/**
 * https://leetcode-cn.com/problems/best-sightseeing-pair/
 * 给你一个正整数数组 values，其中 values[i] 表示第 i 个观光景点的评分，并且两个景点 i 和 j 之间的 距离 为 j - i。
 * 一对景点（i < j）组成的观光组合的得分为 values[i] + values[j] + i - j ，也就是景点的评分之和 减去 它们两者之间的距离。
 * 返回一对观光景点能取得的最高分。
 * @param {number[]} values
 * @return {number}
 */
var maxScoreSightseeingPair1 = function (values) {
  let max = 0;

  for (let i = 0, len = values.length; i < len; i++) {
    for (let j = i + 1, len = values.length; j < len; j++) {
      max = Math.max(max, values[i] + values[j] + i - j);
    }
  }
  return max;
};

var maxScoreSightseeingPair2 = function (values) {
  const temp = new Array(values.length).fill(0);

  for (let i = values.length - 1; i >= 0; i--) {
    if (i === values.length - 1) {
      temp[i] = values[i] - i;
    } else {
      temp[i] = Math.max(values[i] - i, temp[i + 1]);
    }
  }

  let max = 0;

  for (let i = 0, len = values.length - 1; i < len; i++) {
    max = Math.max(max, values[i] + i + temp[i + 1]);
  }

  return max;
};

var maxScoreSightseeingPair = function (values) {
  let ans = 0;
  let max = values[0] + 0;

  for (let j = 1; j < values.length; j++) {
    ans = Math.max(ans, max + values[j] - j);
    max = Math.max(max, values[j] + j);
  }

  return ans;
}

console.log(maxScoreSightseeingPair([8, 1, 5, 2, 6])); // 11
console.log(maxScoreSightseeingPair([1, 2])); // 2
console.log(maxScoreSightseeingPair([1, 3, 5])); // 7
console.log(maxScoreSightseeingPair([1, 2, 2])); // 3
