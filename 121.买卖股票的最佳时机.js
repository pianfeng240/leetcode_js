/*
 * @lc app=leetcode.cn id=121 lang=javascript
 *
 * [121] 买卖股票的最佳时机
 */

// @lc code=start
/**
 * 思路：记录最小值和最大利润，遍历，当前值减去最小值的利润大于最大利润更新，
 * 时间复杂度 O(n)
 * 空间复杂度 O(1)
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  if (prices.length < 2) return 0;

  let min = Number.MAX_SAFE_INTEGER;
  let profit = 0;

  for(let i = 0; i < prices.length; i++) {
    min = Math.min(min, prices[i])
    const diff = prices[i] - min;
    if (diff > profit) {
      profit = diff;
    }
  }

  return profit;
};
// @lc code=end

