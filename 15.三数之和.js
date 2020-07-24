/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 */


// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  // 先排序
  nums.sort((a, b) => a - b);
  const res = [];
  for (let i = 0, len = nums.length; i < len; i++) {
    // 和前一个元素重复，跳过
    if (nums[i] === nums[i - 1]) continue;
    const arr = twoSum(nums, i + 1, 0 - nums[i]);
    arr.forEach(item => {
      item.unshift(nums[i])
      res.push(item)
    })
  }
  return res;
};


function twoSum (nums, start, target) {
  let lp = start;
  let rp = nums.length - 1;
  const res = [];
  while (lp < rp) {
    const sum = nums[lp] + nums[rp];
    if (sum < target) {
      lp++;
    } else if (sum > target) {
      rp--;
    } else {
      const left = nums[lp];
      const right = nums[rp];
      res.push([left, right]);
      while (lp < rp && nums[lp] === left) lp++;
      while (lp < rp && nums[rp] === right) rp--;
    }
  }
  return res;
};
// @lc code=end
