/*
 * @lc app=leetcode.cn id=136 lang=javascript
 *
 * [136] 只出现一次的数字
 * 思路： 所有元素异或后，值是重复的元素
 * 时间复杂度：O(n)
 * 空间复杂度: O(1)
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
  let res = nums[0]
  for (let i = 1; i < nums.length; i++) {
    res ^= nums[i]
  }
  
  return res;
};
// @lc code=end

