/*
 * @lc app=leetcode.cn id=704 lang=javascript
 *
 * [704] 二分查找
 */

// @lc code=start
/**
 * 时间复杂度 O(logn)
 * 空间复杂度 O(1)
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
  if (!nums.length) return -1;

  let left = 0; 
  let right = nums.length - 1;

  // <=, 结束条件是left === right + 1, 搜索区间是空，退出循环是正确的
  // <, 结束条件是left === right, 搜索区间是[left, left], 漏掉了一个数据，需要后面再判断
  while(left <= right) {
    const mid = left + parseInt((right - left) / 2); // 避免溢出

    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return -1;
};
// @lc code=end

