/*
 * @lc app=leetcode.cn id=242 lang=javascript
 *
 * [242] 有效的字母异位词
 * 思路： 转为数组进行排序，再比较数组是否相等
 * 时间复杂度：排序O(nlogn),比较数组O(n),综合是O(nlogn)
 * 空间复杂度: O(1),依赖于排序算法
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
  if (s.length !== t.length) return false;

  s = s.split('').sort();
  t = t.split('').sort();

  return s.toString() === t.toString();
};

/**
 * 思路：hash表，先遍历s，记录字符出现的次数，再遍历t，更新字符次数，如果有小于0或者不存在,返回false
 * 时间复杂度: O(n)
 * 空间复杂度: O(1), 因为字符最多26个
 */
isAnagram = function (s, t) {
  if (s.length !== t.length) return false;

  let map = {}
  for(let i = 0; i < s.length; i++) {
    map[s[i]] = (map[s[i]] || 0) + 1;
  }

  for(let j = 0; j < t.length; j++) {
    if (map[t[j]] === undefined) return false;

    map[t[j]] -= 1;
    if (map[t[j]] < 0) return false;
  }

  return true;
}
// @lc code=end

