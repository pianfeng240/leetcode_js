/*
 * @lc app=leetcode.cn id=268 lang=javascript
 *
 * [268] 丢失的数字
 */

// @lc code=start
/**
 * 思路：数学方法，计算期望完整的和，实际的和，相减得到缺少的数
 * 时间复杂度 O(n)
 * 空间复杂度 O(1)
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
  const expect = (nums.length + 1) * nums.length / 2;
  let real = 0;
  nums.forEach(item => {
    real += item
  })
  return expect - real;
};

/**
 * 思路：位运算，异或
 * 时间复杂度 O(n)
 * 空间复杂度 O(1)
 */
missingNumber = function(nums) {
  let xor;

  for(let i = 0; i <= nums.length; i++) {
    xor ^= i ^ nums[i];
  }

  return xor;
}
// @lc code=end

