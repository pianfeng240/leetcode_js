/*
 * @lc app=leetcode.cn id=198 lang=javascript
 *
 * [198] 打家劫舍
 */

// @lc code=start
/**
 * 思路：动态规划
 * dp(n)表示偷第n间可以得到的最高金额。dp(4)有两种情况，
 * 一种是偷第四间，那么第三间就不能偷，最大值是dp(2) + nums(4 - 1)
 * 第二种是不偷，最大值是dp(3). 
 * 所以状态方程是 dp(n) = max(dp(n-2) + nums[n], dp(n-1)). 可以用两个变量来替换dp(n-2)和dp(n-1)
 * 时间复杂度 O(n)
 * 空间复杂度 O(1)
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
  let prev = 0;
  let cur = 0;

  for(let i = 0; i < nums.length; i++) {
    const t = Math.max(prev + nums[i], cur);
    prev = cur;
    cur = t;
  }

  return cur;
};

// @lc code=end

