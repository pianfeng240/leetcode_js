/*
 * @lc app=leetcode.cn id=387 lang=javascript
 *
 * [387] 字符串中的第一个唯一字符
 * 思路：遍历字符串，记录字符首次出现的位置和次数到hash表
 * 时间复杂度: O(n)
 * 空间复杂度: O(n)
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
  let map = {}
  
  for (let i = 0; i < s.length; i++) {
    const char = s[i]
    if(!map[char]) {
      map[char] = {
        index: i,
        count: 1
      }
      continue;
    }
    
    map[char].count += 1;
  }

  let index = Infinity;
  for(let key in map) {
    if (map[key].count === 1) {
      index = Math.min(map[key].index, index);
    }
  }

  return index === Infinity ? -1 : index;

};
// @lc code=end

