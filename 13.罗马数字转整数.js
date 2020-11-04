/*
 * @lc app=leetcode.cn id=13 lang=javascript
 *
 * [13] 罗马数字转整数
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
  const map = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000,
  }

  const sub = {
    'IV': 1,
    'IX': 1,
    'XL': 1,
    'XC': 1,
    'CD': 1,
    'CM': 1
  }

  let count = 0;
  let i = s.length - 1;
  while(i >= 0) {
    // 取最后两位，看是否需要做减法
    const cur = s[i];
    const curTwo = cur + (s[i + 1] || '')

    if (sub[curTwo]) {
      count -= map[cur];
    } else {
      count += map[cur];
    }

    i--;
  }

  return count;
};
// @lc code=end

