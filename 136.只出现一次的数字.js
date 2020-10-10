/*
 * @lc app=leetcode.cn id=136 lang=javascript
 *
 * [136] 只出现一次的数字
 * 思路： 所有元素异或后，值是重复的元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
  let res = 0
  nums.forEach(num => {
    res = res ^ num;
  })
  return res;
};
// @lc code=end

