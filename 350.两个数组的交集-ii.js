/*
 * @lc app=leetcode.cn id=350 lang=javascript
 *
 * [350] 两个数组的交集 II
 * 思路：哈希表
 * 为了降低空间占用，先遍历较短的数组，把出现次数记录到map中。再遍历另一个数组，判断数据是否已经存在
 * 更新次数，并记录到结果
 * 时间复杂度：O(m,n), 遍历两个数组
 * 空间复杂度：O(min(m,n ))
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
  let m = new Map()
  let arr = nums1.length < nums2.length ? [nums1, nums2] : [nums2, nums1];
  let res = []

  arr[0].forEach(item => {
    m.set(item, (m.get(item) || 0) + 1)
  })

  arr[1].forEach(item => {
    const count = m.get(item)
    if (count > 0) {
      res.push(item)
      m.set(item, count - 1)
    }
  })

  return res;
};

/**
 * 思路：对数组都排序，两个指针分别指向头部，如果不相等，把小的向右移一位。
 * 如果相等，记录到结果，都向右移动一位.
 * 时间复杂度：O(mlogm + nlogn), 两个排序O(mlogm + nlogn)，遍历两个数组O(m + n)
 * 总时间是O(mlogm + nlogn)
 * 空间复杂度：O(min(m, n))
 */
intersect = function (nums1, nums2) {
  // 默认是按unicode
  nums1.sort((a, b) => a - b)
  nums2.sort((a, b) => a - b)

  let p1 = 0, p2 = 0;
  let res = []
  while(p1 < nums1.length && p2 < nums2.length) {
    if (nums1[p1] < nums2[p2]) {
      p1++
    } else if (nums1[p1] > nums2[p2]) {
      p2++
    } else {
      res.push(nums1[p1])
      p1++
      p2++
    }
  }
  return res;
}
// @lc code=end

