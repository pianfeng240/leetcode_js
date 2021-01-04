/*
 * @lc app=leetcode.cn id=79 lang=javascript
 *
 * [79] 单词搜索
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
  const m = board.length;
  const n = board[0].length;

  const used = new Array(m);
  for (let index = 0; index < used.length; index++) {
    used[index] = new Array(n);
  }

  const canFind = (row, column, index) => {
    // 找到了
    if (index === word.length) {
      return true;
    }
    // 不能越界
    if (row < 0 || row >= m || column < 0 || column >= n) {
      return false;
    }

    // 已经被使用过了
    if (used[row][column]) {
      return false;
    }

    // 和当前字母不匹配
    if (board[row][column] !== word[index]) {
      return false;
    }

    used[row][column] = true;

    const nextIndex = index + 1;
    const canFindNext =
      canFind(row - 1, column, nextIndex) ||
      canFind(row + 1, column, nextIndex) ||
      canFind(row, column - 1, nextIndex) ||
      canFind(row, column + 1, nextIndex);

    if (canFindNext) {
      return true;
    }

    used[row][column] = false;

    return false;
  };

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (board[i][j] === word[0] && canFind(i, j, 0)) {
        return true;
      }
    }
  }

  return false;
};

// @lc code=end
