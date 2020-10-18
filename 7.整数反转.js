/*
 * @lc app=leetcode.cn id=7 lang=javascript
 *
 * [7] 整数反转
 * 思路：通过 % / 运算，反转位数.
 * temp = recv * 10 + pop, 可能溢出的情况
 * 正数时
 * 1. recv > maxValue / 10
 * 2. recv = maxValue / 10, pop > maxValue % 10
 * 负数时
 * 1. recv < minValue / 10
 * 2. recv = minValue / 10, pop < minValue % 10
 * 时间复杂度：O(log(x)), x大概有logx位数的数字。 
 * 空间复杂度: O(1)
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  const maxValue = Math.pow(2, 31) - 1;
  const maxDivider = parseInt(maxValue / 10);
  const maxRemain = maxValue % 10; // 7

  const minValue = Math.pow(2, 31) * -1;
  const minDivider = parseInt(minValue / 10);
  const minRemain = minValue % 10; // -8

  let recv = 0;

  while (x !== 0) {
    const pop = x % 10;
    x = parseInt(x / 10);

    if (recv > maxDivider || (recv === maxDivider && pop > maxRemain)) {
      return 0;
    }

    if (recv < minDivider || (recv === minDivider && pop < minRemain)) {
      return 0;
    }

    recv = recv * 10 + pop;
  }

  return recv;
};
// @lc code=end
