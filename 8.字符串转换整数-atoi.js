/*
 * @lc app=leetcode.cn id=8 lang=javascript
 *
 * [8] 字符串转换整数 (atoi)
 * 思路: 遍历字符串，记录符号位，数字先按正数处理，最后乘以符号位，再判断是否溢出
 * 时间复杂度：O(n)
 * 空间复杂度: O(1)
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
  let res = null
  let sign = 1;

  const isNumber = (x) => /\d+/.test(x);

  for(let i = 0; i < s.length; i++) {
    // 第一个非空字符
    if (res === null) {
      if (s[i] === ' ') continue;

      // 不是-、+、数字
      if (s[i] !== '-' && s[i] !== '+' && !isNumber(s[i])) {
        return 0;
      }

      if (s[i] === '-') {
        sign = -1;
        res = 0
      } else if (s[i] === '+') {
        res = 0;
      } else {
        res = +s[i]
      }

      continue
    }

    // 非数字，返回已解析的数字
    if (res !== null && !isNumber(s[i])) break;

    res = res * 10 + +s[i]
  }

  if (sign === 1) {
    const maxValue = Math.pow(2, 31) -1;
    return res > maxValue ? maxValue : res;
  }

  const minValue = -1 * Math.pow(2, 31);
  return -res < minValue ? minValue : -res;
};
// @lc code=end

