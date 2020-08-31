/*
 * @lc app=leetcode.cn id=42 lang=javascript
 *
 * [42] 接雨水
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
  if (height.length <= 2) return 0;

  let left = 0;
  let right = height.length - 1;

  let lMax = height[0]
  let rMax = height[right]

  let res = 0

  // 每个柱子可以接的量由左右两侧柱子的最小值决定
  // 双指针方案可行的原因，比如第3格，左侧最大是1，至于右侧有几个比1大的不关心，有1个就足够
  // 判定了
  while(left <= right) {
    lMax = Math.max(lMax, height[left])
    rMax = Math.max(rMax, height[right])
    
    if(lMax < rMax) {
      res += lMax - height[left]
      left++
    } else {
      res += rMax - height[right]
      right--
    }
  }
  return res;
};
// @lc code=end

