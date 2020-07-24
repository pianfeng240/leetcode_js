/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  let map = new Map()
  for (let i = 0, len = nums.length; i < len; i++) {
    if (map.has(nums[i])) {
      return [map.get(nums[i]), i]
    }

    const sub = target - nums[i] 
    if (!map.has[sub]) {
      map.set(sub, i)
    }
  }
  return []
    
};
// @lc code=end

