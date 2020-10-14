/*
 * @lc app=leetcode.cn id=36 lang=javascript
 *
 * [36] 有效的数独
 * 思路：遍历每一个数据，计算子矩阵的索引，判断行、列、子矩阵是否重复
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {

  const calSubMatrixIndex = function (row, column) {
    return Math.floor(row / 3) * 3 + Math.floor(column / 3)
  }

  const columnMap = new Map();
  const subMatrixMap = new Map();

  for(let i = 0; i < 9; i++) {
    columnMap.set(i, new Set())
    subMatrixMap.set(i, new Set())
  }

  for (let i = 0; i < 9; i++) {
    // 行数据只需要一个set就够了
    const rowSet = new Set();

    for (let j = 0; j < 9; j++) {
      const cur = board[i][j]
      if (cur === '.') continue;

      // 判断行是否有效
      if (rowSet.has(cur)) return false;

      // 判断列是否有效
      if (columnMap.get(j).has(cur)) return false;

      // 判断子矩阵是否有效
      const subMatrixIndex = calSubMatrixIndex(i, j);
      if (subMatrixMap.get(subMatrixIndex).has(cur)) return false;

      rowSet.add(cur)
      columnMap.get(j).add(cur)
      subMatrixMap.get(subMatrixIndex).add(cur)
    }
  }

  return true;
};
// @lc code=end
