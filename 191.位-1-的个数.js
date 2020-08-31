/*
 * @lc app=leetcode.cn id=191 lang=javascript
 *
 * [191] 位1的个数
 */

// @lc code=start
/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
    let count = 0;

    // 通过&, 可以清除最后一位1
    // 时间复杂度O(1),空间复杂度O(1)
    while(n) {
      n = n & (n - 1);
      count++;
    }
};


