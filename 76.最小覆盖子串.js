/*
 * @lc app=leetcode.cn id=76 lang=javascript
 *
 * [76] 最小覆盖子串
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
  let need = new Map();
  for (let index = 0; index < t.length; index++) {
    const element = t[index];
    need[element] = (need[element] || 0) + 1;
  }

  let l = 0;
  let r = 0;
  let match = ''
  let valid = 0
  const window = {}

  while(r < s.length) {
    const char = s[r];

    if (need[char]) {
      window[char] = (window[char] || 0) + 1;

      // 窗口中某个字符数量满足期望
      if (window[char] === need[char]) {
        valid++;

        // 窗口中所有字符都满足期望
        if (valid === Object.keys(need).length) {
          // 找到子串，缩小左窗口

          match = s.substring(l, r + 1);

          while(valid === Object.keys(need).length) {
            const leave = s[l];
            if (need[leave]) {
              window[leave] = window[leave] - 1;
              if (window.leave === 0) {
                valid
              }
            }
            l++;
          }
          
          

        }
      }
    }
  }

  return match;

};

console.log(minWindow('ADOBECODEBANC', 'ABC'))
// @lc code=end

