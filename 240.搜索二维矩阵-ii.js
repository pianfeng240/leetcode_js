/*
 * @lc app=leetcode.cn id=240 lang=javascript
 *
 * [240] 搜索二维矩阵 II
 */

// @lc code=start
/**
 * 思路：从左下角开始搜索，每次减少一行或者一列
 * 时间复杂度 O(m + n)
 * 空间复杂度 O(1)
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
  if (!matrix.length) return 0;

  const rows = matrix.length - 1;
  const columns = matrix[0].length - 1;

  let px = rows
  let py = 0

  while(px >= 0 && py <= columns) {
    const cur = matrix[px][py]
    if (cur < target) {
      py++
    } else if (cur < target) {
      px--;
    } else {
      return true;
    }
  }

  return false;
};
// @lc code=end

