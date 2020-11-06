/*
 * @lc app=leetcode.cn id=118 lang=javascript
 *
 * [118] 杨辉三角
 */

// @lc code=start
/**
 * 思路：遍历生成每一层
 * 时间复杂度 O(n^2) 树的节点数量
 * 空间复杂度 O(n^2) 每一层的节点数量
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
  let i = 0;
  const arr = []
  while(i < numRows) {
    const cur = [1]
    i !== 0 && (cur[i] = 1); //末尾是1

    for(let j = 1; j < i; j++) {
      cur[j] = arr[i - 1][j - 1] + arr[i - 1][j]
    }
    
    arr.push(cur);
    i++;
  }

  return arr;
};
// @lc code=end

