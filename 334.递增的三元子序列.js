/*
 * @lc app=leetcode.cn id=334 lang=javascript
 *
 * [334] 递增的三元子序列
 */

// @lc code=start
/**
 * 思路：暴力，不满足时间复杂度要求
 * 时间复杂度 O(n^3)
 * 空间复杂度 O(1)
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function (nums) {
  if (nums.length < 3) return false;

  for (let i = 0; i <= nums.length - 3; i++) {
    let p1 = i + 1;

    while (p1 < nums.length - 1) {
      if (nums[p1] > nums[i]) {
        let p2 = p1 + 1;

        while (p2 < nums.length) {
          if (nums[p2] > nums[p1]) {
            return true;
          }
          p2++;
        }
      }
      p1++;
    }
  }

  return false;
};

/**
 * 思路：两个记录第一小和第二小，小等于small时更新small，小等于mid时更新mid
 * 大于最小值时更新中间值
 * 时间复杂度 O(n)
 * 空间复杂度 O(1)
 */
increasingTriplet = function (nums) {
  if (nums.length < 3) return false;

  let small = nums[0];
  let mid;

  for (let i = 1; i < nums.length; i++) {
    const element = nums[i];

    if (element <= small) {
      small = element;
    } else if (mid === undefined || element <= mid) {
      mid = element;
    } else {
      return true;
    }
  }

  return false;
};
// 1 0 2 0 -1 3
// @lc code=end
