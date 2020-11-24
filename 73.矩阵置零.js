/*
 * @lc app=leetcode.cn id=73 lang=javascript
 *
 * [73] 矩阵置零
 */

// @lc code=start
/**
 * 思路：遍历元素，记录需要置0的行和列
 * 时间复杂度 O(m * n)
 * 空间复杂度 O(m + n), 最坏情况都需要置0
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
  const row = new Set();
  const column = new Set();

  const rows = matrix.length;
  const columns = matrix[0].length;

  for(let i = 0; i < rows; i++) {
    for(let j = 0; j < columns; j++) {
      const item = matrix[i][j]
      if (item === 0) {
        if (!row.has(i)) {
          row.add(i)
        }

        if (!column.has(j)) {
          column.add(j)
        }
      }
    }
  }

  row.keys().forEach(i => {
    matrix[i] = matrix[i].map(item => 0)
  })

  column.keys().forEach(j => {
    matrix.forEach(row => {
      row[j] = 0;
    })
  })
};

/**
 * 思路：方法1时把需要置0的行、列单独记录，本方法通过把行、列的第一元素置0表示该行或列需要置0。
 * 因为第一行和第一列都用m[0][0]，所以要用另一个变量标识第一列是否置0
 * 时间复杂度 O(n ^ 2)
 * 空间复杂度 O(1)
 */
setZeroes = function(matrix) {
  const m = matrix.length;
  const n = matrix[0].length;

  let resetFirstColumn = false;

  for(let i = 0; i < m; i++) {
    for(let j = 0; j < n; j++) {
      const item = matrix[i][j]
      if (item === 0) {
        if (j === 0) {
          resetFirstColumn = true;
          matrix[i][0] = 0;
          continue;
        }

        matrix[i][0] = 0;
        matrix[0][j] = 0;
      }
    }
  }

  // 从第二列开始重置
  for(let i = 1; i < n; i++) {
    if (matrix[0][i] === 0) {
      matrix.forEach(row => {
        row[i] = 0;
      })
    }
  }

  // 从第二行开始重置
  for(let i = 1; i < m; i++) {
    if (matrix[i][0] === 0) {
      matrix[i] = matrix[i].map(item => 0);
    }
  }

  // 重置第一行
  if(matrix[0][0] === 0) {
    matrix[0] = matrix[0].map(item => 0);
  }

  // 重置第一列
  if (resetFirstColumn) {
    matrix.forEach(row => {
      row[0] = 0;
    })
  }
  
}
// @lc code=end

