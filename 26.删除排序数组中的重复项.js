/*
 * @lc app=leetcode.cn id=26 lang=javascript
 *
 * [26] 删除排序数组中的重复项
 * #快慢指针
 * 思路：元素不相同时增加slow，把fast值赋给slow；fast每次增加。
 * 题目要求不需要考虑新长度之后的元素，所以不用直接修改数据长度
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  const len = nums.length
  if (len < 2) return len;

  let slow = 0;
  let fast = 1;
  while (fast < len) {
    if (nums[fast] !== nums[slow]) {
      slow++
      nums[slow] = nums[fast]
    }
    fast++
  }
  return slow + 1;
};
// @lc code=end

