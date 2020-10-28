/*
 * @lc app=leetcode.cn id=34 lang=javascript
 *
 * [34] 在排序数组中查找元素的第一个和最后一个位置
 */

// @lc code=start
/**
 * 思路：二分查找左边界和右边界
 * 时间复杂度 O(logn)
 * 空间复杂度 O(1)
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
  const res = [-1, -1]
  let left = 0;
  let right = nums.length - 1;

  while(left < right) {
    // const mid = left + parseInt((right - left) / 2);
    const mid = left + ((right - left) >> 1);
    // console.log(mid)
    if (nums[mid] === target) {
      right = mid;
    } else if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }


  res[0] = (nums[left] === target) ? left : -1;

  left = 0;
  right = nums.length - 1;

  while(left < right) {
    const mid = left + ((right - left) >> 1) + 1;
    // console.log('+', mid)
    if (nums[mid] === target) {
      left = mid;
    } else if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  
  res[1] = (nums[left] === target) ? left : -1;
  return res;

};
// console.log(searchRange([1], 1)) // 0,0
// console.log(searchRange([5,7,7,8,8,10], 8)) // 3,4
// console.log(searchRange([5,7,7,8,8,10], 6)) // -1,-1
// console.log(searchRange([2,2], 2)) // 0,1
// @lc code=end

