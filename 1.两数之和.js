/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 * 思路：用map记录当前元素的差值和索引，如果map存在当前元素，则返回索引数组
 * 时间复杂度: O(n)
 * 空间复杂度: O(n)
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  let map = new Map()

  for(let i = 0; i < nums.length; i++) {
    if (map.has(nums[i])) {
      return [map.get(nums[i]), i]
    }

    map.set(target - nums[i], i);
  }
  return []
    
};
// @lc code=end

