/*
 * @lc app=leetcode.cn id=509 lang=javascript
 *
 * [509] 斐波那契数
 */

// @lc code=start
/**
 * 0 1 1 2 3.. fn = fn-1 + fn-2
 * @param {number} N
 * @return {number}
 */
var fib = function(N) {
  if (N === 0 || N === 1) return N;

  let prev = 0;
  let cur = 1;
  for (let i = 2; i <= N; i++) {
    let sum = prev + cur;
    prev = cur;
    cur = sum;
  }
  return cur;
};
// @lc code=end

