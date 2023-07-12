/**
 * https://leetcode-cn.com/problems/maximum-sum-circular-subarray/
 * 给定一个由整数数组 A 表示的环形数组 C，求 C 的非空子数组的最大可能和。
 * 在此处，环形数组意味着数组的末端将会与开头相连呈环状。（形式上，当0 <= i < A.length 时 C[i] = A[i]，且当 i >= 0 时 C[i+A.length] = C[i]）
 * 此外，子数组最多只能包含固定缓冲区 A 中的每个元素一次。（形式上，对于子数组 C[i], C[i+1], ..., C[j]，不存在 i <= k1, k2 <= j 其中 k1 % A.length = k2 % A.length）
 * @param {number[]} nums
 * @return {number}
 */
var maxSubarraySumCircular = function(nums) {
    const sum = nums.reduce((a,b)=>a+b,0); //数组和
    const length = nums.length;
    let max = nums[0]; //数组最大和
    let dpMax = [nums[0]];
    let min = nums[0]; //数组最小和
    let dpMin = [nums[0]];
    for(let i=1; i<length; i++) {
        dpMax[i] = nums[i] + Math.max(dpMax[i-1],0);
        dpMin[i] = nums[i] + Math.min(dpMin[i-1],0);
        max = Math.max(dpMax[i], max);
        min = Math.min(dpMin[i], min);
    }
    if(max<0) return max;
    return Math.max(sum - min, max);
};

console.log(maxSubarraySumCircular([1, -2, 3, -2]));
// console.log(maxSubarraySumCircular([5, -3, 5]));
// console.log(maxSubarraySumCircular([3, -1, 2, -1]));
// console.log(maxSubarraySumCircular([3, -2, 2, -3]));
// console.log(maxSubarraySumCircular([-2, -3, -1]));
