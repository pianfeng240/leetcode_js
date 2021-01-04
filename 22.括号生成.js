/*
 * @lc app=leetcode.cn id=22 lang=javascript
 *
 * [22] 括号生成
 */

// @lc code=start
/**
 * 思路：暴力。 2n长度的字符串，每个位置可以放(或者),共有2^(2n)种组合
 * 判断每个组合左括号数量减去右括号的数量，为负时不合法
 * 时间复杂度 O(2^2n * n), 每个序列都需要O(n)验证正确性
 * 空间复杂度 O(n)
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  const res = [];
  const len = 2 * n;

  const generate = (current, pos) => {
    if (pos === len) {
      if (valid(current)) {
        res.push(current.join(""));
      }
      return;
    }

    current[pos] = "(";
    generate(current, pos + 1);
    current[pos] = ")";
    generate(current, pos + 1);
  };

  const valid = (arr) => {
    let count = 0;

    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === "(") count++;
      if (arr[i] === ")") count--;

      if (count < 0) return false;
    }

    return count === 0;
  };

  generate([], 0);

  return res;
};

/**
 *思路：一直选择括号，要么左括号，要么右括号
 * 约束条件： 只有(有，就可以选； 当剩下的)比(多时，才能选）括号
 */
generateParenthesis = function (n) {
  const res = [];

  const generate = (lRemain, rRemain, cur) => {
    if (cur.length === 2 * n) {
      res.push(cur);
      return;
    }

    // 有左括号，就可以选
    if (lRemain > 0) {
      generate(lRemain - 1, rRemain, str + "(");
    }

    // 右括号比左括号多，才能选
    if (lRemain < rRemain) {
      generate(lRemain, rRemain - 1, str + ")");
    }
  };

  generate(n, n, "");
  return res;
};
// @lc code=end
