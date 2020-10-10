/*
 * @lc app=leetcode.cn id=66 lang=javascript
 *
 * [66] 加一
 * 思路：从末尾遍历，模拟运算
 */

// @lc code=start
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {

  let plus = 0
  const lastIndex = digits.length - 1;
  for(let i = lastIndex; i >= 0; i--) {
    const sum = digits[i] + (i === lastIndex ? 1 : 0) + plus;
    if (sum !== 10) {
      digits[i] = sum;
      return digits
    }

    plus = 1;
    digits[i] = 0;
  }

  return [1, ...digits];
};

// @lc code=end

