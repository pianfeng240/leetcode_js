/*
 * @lc app=leetcode.cn id=125 lang=javascript
 *
 * [125] 验证回文串
 * 思路：
 * 时间复杂度：O(n)
 * 空间复杂度: O(1)
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
  let left = 0;
  let right = s.length - 1;

  const codes = {
    '0': '0'.charCodeAt(0),
    '9': '9'.charCodeAt(0),
    'a': 'a'.charCodeAt(0),
    'z': 'z'.charCodeAt(0),
  }

  const isChar = function (char) {
    const code = char.toLowerCase().charCodeAt(0);
    return (code >= codes['0'] && code <= codes['9']) 
      || (code >= codes['a'] && code <= codes['z'])
  }

  while(left < right) {
    // 跳过非数字和字母符号
    if (!isChar(s[left])) {
      left++
      continue
    };
    if (!isChar(s[right])) {
      right--
      continue
    };

    if (s[left].toLowerCase() !== s[right].toLowerCase()) return false;

    left++
    right--;
  }

  return true;
};
// @lc code=end

