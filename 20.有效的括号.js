/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  if (!s) return true;

  let stack = []
  const map = {
    '}': '{',
    ')': '(',
    ']': '[',
  }
  for(let i = 0; i < s.length; i++) {
    const char = s[i];
    if (char === '(' || char === '[' || char === '{') {
      stack.push(char)
      continue
    }
    
    if (map[char] && stack.pop() !== map[char]) {
      return false;
    }
  }
  return stack.length === 0;

};

// @lc code=end

