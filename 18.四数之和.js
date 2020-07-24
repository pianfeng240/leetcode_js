/*
 * @lc app=leetcode.cn id=18 lang=javascript
 *
 * [18] 四数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function (nums, target) {
  nums.sort((a, b) => a - b);
  const res = [];
  for (let i = 0, len = nums.length; i < len; i++) {
    const arr = threeSum(nums, i + 1, target - nums[i]);
    arr.forEach((item) => {
      res.push([nums[i], ...item]);
    });

    while (nums[i + 1] === nums[i]) i++
  }
  return res;
};

function threeSum(nums, start, target) {
  const res = [];
  for (let i = start, len = nums.length; i < len; i++) {
    const arr = twoSum(nums, i + 1, target - nums[i]);
    arr.forEach((item) => {
      res.push([nums[i], ...item]);
    });

    while (nums[i + 1] === nums[i]) i++
  }
  return res;
}

function twoSum(nums, start, target) {
  let lp = start;
  let rp = nums.length - 1;
  const res = []
  while (lp < rp) {
    const sum = nums[lp] + nums[rp];
    if (sum < target) lp++;
    else if (sum > target) rp--;
    else {
      res.push([nums[lp], nums[rp]])
      let temp = nums[lp]
      while(lp < rp && nums[lp] === temp) lp++
      temp = nums[rp]
      while(lp < rp && nums[rp] === temp) rp--
    }
  }
  return res;
}

console.log(fourSum([0,0,4,-2,-3,-2,-2,-3], -1))
// @lc code=end
