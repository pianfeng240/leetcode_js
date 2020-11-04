/*
 * @lc app=leetcode.cn id=412 lang=javascript
 *
 * [412] Fizz Buzz
 */

// @lc code=start
/**
 * 思路：用map定义规则
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
  const map = new Map()
  map.set(3, 'Fizz')
  map.set(5, 'Buzz')

  const res = []

  for(let i = 1; i <= n; i++) {
    let str = '';

    map.forEach((value, key) => {
      if (i % key === 0) {
        str += value;
      }
    })

    if (str === '') {
      str = '' + i;
    }
    res.push(str);
  }

  return res;
};
// @lc code=end

