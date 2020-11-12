/*
 * @lc app=leetcode.cn id=169 lang=javascript
 *
 * [169] 多数元素
 */

// @lc code=start
/**
 * 思路：先排序，中间元素就是最多的
 * 时间复杂度 O(nlogn) v8元素小于10是插入排序，大于10是快排
 * 空间复杂度 O(logn) 排序算法
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
  nums.sort();
  return nums[Math.floor(nums.length / 2)]
};

/**
 * 思路：Boyer-Moore算法，维护1个候选众数和它出现的次数，相同时加，不同时减1，为0时更新众数
 * 时间复杂度 O(n)
 * 空间复杂度 O(1)
 */
majorityElement = function(nums) {
  let major;
  let count = 0;

  for (let index = 0; index < nums.length; index++) {
    const element = nums[index];

    if (count === 0) {
      major = element;
      count++;
      continue
    }

    if (element !== major) {
      count--;
    } else {
      count++;
    }

  }

  return major;
}
// @lc code=end

