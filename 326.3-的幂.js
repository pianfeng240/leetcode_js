/*
 * @lc app=leetcode.cn id=326 lang=javascript
 *
 * [326] 3的幂
 */

// @lc code=start
/**
 * 思路：递归。判断数字能否被3整除
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function(n) {
  if (n < 1) return false;
  if (n === 1) return true;

  if (n % 3 !== 0) return false;
  return isPowerOfThree(n / 3);
};

/**
 * 思路：迭代，3的幂每次除以3，最终得到1
 * 时间复杂度 O(logn)
 * 空间复杂度 O(1)
 */
isPowerOfThree = function(n) {
  if (n < 1) return false;

  while(n % 3 === 0) {
    n = n / 3;
  }

  return n === 1;
}


// @lc code=end

