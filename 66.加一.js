/*
 * @lc app=leetcode.cn id=66 lang=javascript
 *
 * [66] 加一
 * 思路：从末尾遍历，模拟运算. 加1后对10取余，如果不是0直接返回，如果是0说明有进位，进入下次循环。
 * 时间复杂度 O(n)
 * 空间复杂度 O(1)
 */

// @lc code=start
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {

  for(let i = digits.length - 1; i >= 0; i--) {
    digits[i] = (digits[i] + 1) % 10;

    if (digits[i] !== 0) {
      return digits;
    }
  }

  return [1, ...digits];
};

// @lc code=end

