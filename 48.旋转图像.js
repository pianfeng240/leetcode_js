/*
 * @lc app=leetcode.cn id=48 lang=javascript
 *
 * [48] 旋转图像
 * 思路: 旋转的坐标变换方式是: 列变为行，数组长度减去行作为列。遍历矩阵，记录完成移动的坐标。
 * 时间复杂度：O(n^2)
 * 空间复杂度：O(1)
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
  const len = matrix.length - 1;
  const moved = {}

  for (let i = 0; i <= len; i++) {
    const targetColumn = len - i;

    for (let j = 0; j <= len; j++) {
      if (moved[i + '_' + j]) continue;

      let tmp = matrix[j][targetColumn]
      matrix[j][targetColumn] = matrix[i][j]
      matrix[i][j] = tmp;

      // 标记 该位置已经是旋转后的数据了
      moved[j + '_' + targetColumn] = true;
    }
  }
};
// @lc code=end

