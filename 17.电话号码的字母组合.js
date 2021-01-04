/*
 * @lc app=leetcode.cn id=17 lang=javascript
 *
 * [17] 电话号码的字母组合
 */

// @lc code=start
const map = {
  2: "abc",
  3: "def",
  4: "ghi",
  5: "jkl",
  6: "mno",
  7: "pqrs",
  8: "tuv",
  9: "wxyz",
};

/**
 * 思路：dfs,
 * 时间复杂度 O(3^m * 4^n), m是输入中对应3个字母的数字个数,n是对应4个字母的数字个数
 * 空间复杂度 O(n), 递归栈的深度
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  if (!digits) return [];

  const res = [];

  const dfs = (cur, i) => {
    if (i === digits.length) {
      res.push(cur);
      return;
    }
    const chars = map[digits.charAt(i)];
    for (const char of chars) {
      dfs(cur + char, i + 1);
    }
  };

  dfs("", 0);

  return res;
};

/**
 * 思路：bfs
 */
letterCombinations = function (digits) {
  if (!digits) return [];

  const queue = [];
  queue.push("");

  for (let i = 0; i < digits.length; i++) {
    const qlen = queue.length;

    const chars = map[digits[i]];

    for (let j = 0; j < qlen; j++) {
      const cur = queue.shift();
      for (const char of chars) {
        queue.push(cur + char);
      }
    }
  }

  return queue;
};
// @lc code=end
