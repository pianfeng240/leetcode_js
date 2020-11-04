/*
 * @lc app=leetcode.cn id=204 lang=javascript
 *
 * [204] 计数质数，大于1的自然数，除了1和它本身外，不能被其他自然数整除
 */

// @lc code=start
/**
 * 思路：计算2-sqrt(n)之间的数是否能被整除就可以,
 * 比如 12，2*6 3*4 sqrt(12)*sqrt(12) 4*3 6*2
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) {
  if (n < 3) return 0;

  // 从3开始，2是质数，所以count初识为1
  let count = 1;

  for(let i = 3; i < n; i++) {
    // 2的整数倍不是质数
    if(i % 2 === 0) continue;

    let prime = true;
    const sqrt = Math.floor(Math.sqrt(i))
    for(let j = 2; j <= sqrt; j++) {
      if (i % j === 0) {
        // 非质数
        prime = false;
        break;
      }
    }

    if (prime) count++;
  }

  return count;

};

/**
 * 思路：埃拉托斯特尼筛法,简称埃式筛，也叫厄拉多塞筛法
 * 
 */
countPrimes = function(n) {
  let table = new Array(n).fill(true);
  let count = 0;

  for(let i = 2; i < n; i++) {
    if (table[i]) {
      count++;

      // 把所有倍数都标记为false
      for(let j = i + i; j < n; j += i) {
        table[j] = false;
      }
    }
  }

  return count;
}
// @lc code=end

