/*
 * @lc app=leetcode.cn id=189 lang=javascript
 *
 * [189] 旋转数组
 * 思路：旋转k次
 * 时间复杂度：O(k * n)
 * 空间复杂度：O(1)
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
  
  while(k--) {
    let last = nums[nums.length - 1]
    for (let i = nums.length - 1; i > 0; i--) {
      nums[i] = nums[i - 1]
    }
    nums[0] = last
  }
};

/**
 * 使用反转
 * 思路：旋转k次，k%n个尾部元素被移动到头部，剩下的元素向后移动。
 * 先将所有元素反转，再反转前k%n个，再反转后面的
 * 
 */
rotate = function (nums, k) {
  k %= nums.length;

  var reverse = function (nums, start, end) {
    while (start < end && end < nums.length) {
      const temp = nums[start]
      nums[start] = nums[end]
      nums[end] = temp
      start++
      end--
    }
  }

  reverse(nums, 0, nums.length - 1)
  reverse(nums, 0, k - 1)
  reverse(nums, k, nums.length - 1)
}
// @lc code=end

