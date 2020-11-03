/*
 * @lc app=leetcode.cn id=70 lang=javascript
 *
 * [70] 爬楼梯
 */

// @lc code=start
const map = {}
/**
 * 思路：递归，带备忘录。
 * 时间复杂度 O(n)
 * 空间复杂度 O(n)
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
  if (n <= 2) return n;

  if (map[n]) return map[n];

  map[n] = climbStairs(n - 1) + climbStairs(n - 2);
  return map[n];
};

/**
 * 思路：动态规划,状态方程 f(x) = f(x-1) + f(x-2)
 * 时间复杂度: O(n)
 * 空间复杂度 O(1)
 */
climbStairs = function(n) {
  if (n <= 2) return n;

  let n1 = 1;
  let n2 = 2;

  let i = 3;
  let t;
  while(i++ <= n) {
    t = n1 + n2;
    n1 = n2;
    n2 = t;
  }

  return t;
} 

// todo: 通项公式，时间复杂度 O(logn)

// @lc code=end