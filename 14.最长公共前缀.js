/*
 * @lc app=leetcode.cn id=14 lang=javascript
 *
 * [14] 最长公共前缀
 * 思路：对比每个字符串的每一个列，相等则对比下一列，不等返回
 * 时间复杂度：O(m * n), m是数组中字符串的平均长度，n是字符串的数量。最坏情况是每个字符串的每个字符都比较一次
 * 空间复杂度: O(1)
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  if (!strs.length) return '';

  let prev = ''
  const len = strs[0].length;
  const count = strs.length;
  for(let i = 0; i < len; i++) {
    const cur = strs[0][i];
    for(let j = 1; j < count; j++) {
      if (strs[j][i] !== cur) {
        return prev;
      }
    }
    prev += cur;
  }

  return prev;
};
// @lc code=end

