/*
 * @lc app=leetcode.cn id=217 lang=javascript
 *
 * [217] 存在重复元素
 * 思路1：利用hash表，时间复杂度O(n),空间复杂度O(n)
 * 思路2：先排序，再遍历，看是否有重复元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
  let set = new Set();
  for (let i = 0; i < nums.length; i++) {
    if (set.has(nums[i])) {
      return true;
    }
    set.add(nums[i])
  }
  return false;
};

containsDuplicate = function(nums) {
  nums.sort();
  for(let i = 0; i < nums.length; i++) {
    if (nums[i] === nums[i + 1]) return true;
  }
  return false;
};

// @lc code=end

