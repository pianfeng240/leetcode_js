/*
 * @lc app=leetcode.cn id=5 lang=javascript
 *
 * [5] 最长回文子串
 */

// @lc code=start
/**
 * 思路：暴力，判断所有长度大于2的子串是否是回文. 记录起始位置和长度就行
 * 时间复杂度 O(n^3),两层遍历和判断回文
 * 空间复杂度 O(1)
 * @param {string} s
 * @return {string}
 */
// var longestPalindrome = function (s) {
//   const slen = s.length;
//   if (slen < 2) {
//     return s;
//   }
//   let start = 0;
//   let maxLen = 1;

//   for (let i = 0; i < s.length - 1; i++) {
//     for (let j = i + 1; j < s.length; j++) {
//       if (j - i + 1 > maxLen && validPrlindrome(s, i, j)) {
//         start = i;
//         maxLen = j - i + 1;
//       }
//     }
//   }

//   return s.substr(start, maxLen);
// };

// var validPrlindrome = function (s, start, end) {
//   while (start < end) {
//     if (s[start] !== s[end]) return false;
//     start++;
//     end--;
//   }
//   return true;
// };

/**
 * 思路：动态规划，使用dp表格，dp[i][j]表示从i到j是否是回文，
 * dp[i][j] = (dp[i+1, j-1] || j - i < 3) && s[i] === s[j]
 * j - i < 3表示 2个元素和3个元素的情况，不需要判断子串，只需要判断两边的字符是否相等
 * 当前元素依赖左下角的元素，填表的顺序很重要
 * 时间复杂度 O(n^2)
 * 空间复杂度 O(n^2)
 */
longestPalindrome = function (s) {
  const slen = s.length;
  if (slen < 2) {
    return s;
  }
  let start = 0;
  let maxLen = 1;

  let dp = new Array(slen);
  for (let j = 0; j < slen; j++) {
    dp[j] = new Array(slen);
  }

  for (let j = 1; j < slen; j++) {
    // i < j，是因为i===j的状态没有被依赖，可以减少计算
    for (let i = 0; i < j; i++) {
      dp[i][j] = s[i] === s[j] && (j - i < 3 || dp[i + 1][j - 1]);

      if (dp[i][j]) {
        const len = j - i + 1;
        if (len > maxLen) {
          start = i;
          maxLen = len;
        }
      }
    }
  }

  return s.substr(start, maxLen);
};

/**
 * 思路：中心扩散法。回文中心有两种情况，回文串长度为奇数时，中心是字符；
 * 长度为偶数时，中心是两个字符的间隙
 * 时间复杂度 O(n^2)
 * 空间复杂度 O(1)
 */
longestPalindrome = function (s) {
  let max = "";
  for (let i = 0; i < s.length; i++) {
    let oddMatch = centerSpread(s, i, i);
    let evenMatch = centerSpread(s, i, i + 1);
    let match = oddMatch.length > evenMatch.length ? oddMatch : evenMatch;
    if (match.length > max.length) {
      max = match;
    }
  }
  return max;
};

/**
 * start end相等
 * @param {中心扩散} s
 * @param {*} start
 * @param {*} end
 */
var centerSpread = function (s, start, end) {
  const len = s.length;
  while (start >= 0 && end < len) {
    if (s[start] !== s[end]) {
      break;
    }
    start--;
    end++;
  }

  // start已经在回文串外了
  return s.substring(start + 1, end);
};

// TODO: Manacher算法，时间复杂度 O(n)，空间复杂度O(n)
// console.log(longestPalindrome("aacabdkacaa"));
// @lc code=end
