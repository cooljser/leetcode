/**
 * https://leetcode-cn.com/problems/is-subsequence/submissions/
 * 给定字符串 s 和 t ，判断 s 是否为 t 的子序列。 
 * 字符串的一个子序列是原始字符串删除一些（也可以不删除）字符而不改变剩余字符相对位置形成的新字符串。
 *（例如，"ace"是"abcde"的一个子序列，而"aec"不是）。
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
  let m = s.length,
    n = t.length,
    i = 0,
    j = 0;

  while (i < m && j < n) {
    if (s[i] === t[j]) {
      i++;
    }
    j++;
  }

  return i === m;
};
// var isSubsequence = function (s, t) {
// let ret = true;
// let lastIndex = -1;
// let array = t.split('');

// for (let i = 0; i < s.length; i++) {
// const char = s[i];
// const index = array.findIndex((o, i) => o === char && i > lastIndex);
// if (index === -1) {
// ret = false;
// break;
// }
// lastIndex = index;
// }

// return ret;
// };

console.log(isSubsequence('abc', 'ahbgdc')); // true
console.log(isSubsequence('axc', 'ahbgdc')); // false
