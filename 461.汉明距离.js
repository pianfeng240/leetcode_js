/*
 * @lc app=leetcode.cn id=461 lang=javascript
 *
 * [461] 汉明距离
 */

// @lc code=start
/**
 * 思路：先异或，剩下不同的位，再布赖恩·克尼根算法移除最右边的1比特位
 * 时间复杂度 O(1)
 * 空间复杂度 O(1)
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function(x, y) {
  let xor = x ^ y;

  let count = 0;
  while(xor) {
    xor = xor & (xor - 1);
    count++
  }

  return count;
};
// @lc code=end

