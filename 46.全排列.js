/*
 * @lc app=leetcode.cn id=46 lang=javascript
 *
 * [46] 全排列
 */

// @lc code=start
/**
 * 思路：回溯，
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  const res = [];

  const backtrack = (path, nums) => {
    if (path.length === nums.length) {
      res.push(path.slice());
      return;
    }

    for (let i = 0; i < nums.length; i++) {
      const element = nums[i];
      if (path.includes(element)) {
        continue;
      }
      path.push(element);
      backtrack(path, nums);
      path.pop(element);
    }
  };

  backtrack([], nums);

  return res;
};
// @lc code=end
