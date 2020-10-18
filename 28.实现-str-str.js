/*
 * @lc app=leetcode.cn id=28 lang=javascript
 *
 * [28] 实现 strStr()
 * 思路：滑动窗口，逐一比较
 * 时间复杂度: O((N-L)L). N是haystack长度，L是needle长度。外循环n-l次，内部字符串比较l次
 * 空间复杂度: O(1)
 */

// @lc code=start
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
  if (needle === '') return 0;

  const len = needle.length;
  const hlen = haystack.length - len + 1;

  for (let i = 0; i <= hlen; i++) {
    if (haystack.substr(i, i + len) === needle) {
      return i;
    }
  }

  return -1;
};

// todo: rabin-karp
// todo: KMP算法
// @lc code=end

