/*
 * @lc app=leetcode.cn id=167 lang=javascript
 *
 * [167] 两数之和 II - 输入有序数组
 */

// @lc code=start
/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
  let lp = 0;
  let rp = numbers.length - 1;

  while(lp < rp) {
    const sum = numbers[lp] + numbers[rp]
    if (sum === target) {
      return [lp + 1, rp + 1]
    } else if (sum < target) {
      lp++;
    } else {
      rp--;
    }
  }
  return []
};
// @lc code=end

