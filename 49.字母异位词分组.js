/*
 * @lc app=leetcode.cn id=49 lang=javascript
 *
 * [49] 字母异位词分组
 */

// @lc code=start
/**
 * 思路：对字符串进行排序，记录到map中
 * 时间复杂度 O(NKlogK), N是strs的长度， K是最长字符串，KlogK是最长字符串的排序
 * 空间复杂度 O(NK)
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  let map = {};
  for (let i = 0; i < strs.length; i++) {
    const element = strs[i].split("");
    const key = element.sort().join("");
    if (!map[key]) {
      map[key] = [];
    }
    map[key].push(strs[i]);
  }

  return Object.keys(map).map((item) => {
    return map[item];
  });
};

/**
 * 思路：按计数分类，两个字符串中的字符出现次数相同时，是字母异位词
 * 时间复杂度 O(N * K)
 * 空间复杂度 O(NK)
 */
groupAnagrams = function (strs) {
  const codeOfa = "a".charCodeAt(0);
  let map = {};

  for (let i = 0; i < strs.length; i++) {
    const str = strs[i];
    let key = new Array(26).fill(0);

    for (let j = 0; j < str.length; j++) {
      const alpha = str[j].charCodeAt(0) - codeOfa;
      key[alpha] += 1;
    }
    // 不用能空字符串拼
    key = key.join("/");
    if (!map[key]) {
      map[key] = [];
    }
    map[key].push(str);
  }

  return Object.keys(map).map((item) => {
    return map[item];
  });
};
// console.log(groupAnagrams(["bdddddddddd", "bbbbbbbbbbc"]));
// @lc code=end
