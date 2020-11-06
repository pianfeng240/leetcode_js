/*
 * @lc app=leetcode.cn id=191 lang=javascript
 *
 * [191] 位1的个数
 */

// @lc code=start
/**
 * 思路：n 和 n-1 按位与，可以清除末尾的位1
 * 时间复杂度 O(1)
 * 空间复杂度 O(1)
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
    let count = 0;

    while(n) {
      n = n & (n - 1);
      count++;
    }

    return count;
};


