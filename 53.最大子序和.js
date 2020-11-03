/*
 * @lc app=leetcode.cn id=53 lang=javascript
 *
 * [53] 最大子序和
 */

// @lc code=start
/**
 * 思路：动态规划。 状态方程 f(i) = max(f(i-1) + i, i)
 * prev变量记录以i为结尾的连续子数组的最大值，判断加入前面的子数组还是单独开始
 * 时间复杂度 O(n)
 * 空间复杂度 O(1)
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  if (!nums.length) return 0;

  let max = nums[0];
  let prev = nums[0];

  for(let i = 1; i < nums.length; i++) {
    prev = Math.max(prev + nums[i], nums[i])
    if (prev > max) {
      max = prev
    }
  }

  return max;

};

// todo: 分治
// @lc code=end

