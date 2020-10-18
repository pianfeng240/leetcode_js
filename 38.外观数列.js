/*
 * @lc app=leetcode.cn id=38 lang=javascript
 *
 * [38] 外观数列
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
  let say = '1';
  while(--n) {
    // 遍历字符串
    let i = 0;
    const says = []
    while (i < say.length) {
      const cur = say[i]
      if (cur !== say[i - 1]) {
        says.push(1) // 数量
        says.push(cur) // 字符
      } else {
        says[says.length - 2] += 1;
      }
      i++
    }
    say = says.join('')
  }

  return say;
};
// @lc code=end

