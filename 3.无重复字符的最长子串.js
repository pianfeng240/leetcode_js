/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
/**
 * 思路：双指针，滑动窗口。窗口内不重复时不停移动右指针，重复后把左指针右移一位
 * 时间复杂度 O(n)
 * 空间复杂度 O(|E|), 表示字符集的大小
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  
  const set = new Set();
  const len = s.length;

  let r = 0;
  let max = 0;

  for (let index = 0; index < len; index++) {

    while(r < len && !set.has(s[r])) {
      max = Math.max(max, r - index + 1);
      set.add(s[r]);
      r++;
    };

    set.delete(s[index])
  }

  return max;
};
// console.log(lengthOfLongestSubstring('pwwkew'))
// @lc code=end

