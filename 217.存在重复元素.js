/*
 * @lc app=leetcode.cn id=217 lang=javascript
 *
 * [217] 存在重复元素
 * 思路：利用hash表
 * 时间复杂度 O(n)
 * 空间复杂度 O(n)
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

/**
 * 思路：先排序，再遍历元素看是否重复
 * 时间复杂度: O(nlogn)
 * 空间复杂度：O(1)
 */
containsDuplicate = function(nums) {
  nums.sort();
  for(let i = 0; i < nums.length; i++) {
    if (nums[i] === nums[i + 1]) return true;
  }
  return false;
};

// @lc code=end

