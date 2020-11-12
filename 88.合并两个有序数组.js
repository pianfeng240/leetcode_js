/*
 * @lc app=leetcode.cn id=88 lang=javascript
 *
 * [88] 合并两个有序数组
 */

// @lc code=start
/**
 * 思路： 拷贝nums1的前m个数据nums，比较nums和nums2，小的放入结果。
 * 遍历后剩下的直接加入到结果
 * 时间复杂度: O(m + n)，遍历两个数组
 * 空间复杂度: O(m), 拷贝了m个数据；
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  const copyed = nums1.slice(0, m);

  let i = 0;
  let j = 0;

  let t = 0;

  while(i < m && j < n) {
    nums1[t++] = copyed[i] <= nums2[j] ? copyed[i++] : nums2[j++];
  }

  while(i < m) {
    nums1[t++] = copyed[i++]
  }
  while(j < n) {
    nums1[t++] = nums2[j++]
  }
};

/**
 * 思路：用2个指针分别从末尾开始比较，当一个为空时结束，未处理的数据都移到nums1对应位置
 * 时间复杂度 O(n)
 * 空间复杂度 O(1)
 */
merge = function (nums1, m, nums2, n) {

  let p = m - 1;
  let q = n - 1;

  let r = m + n - 1;

  while (p >= 0 && q >= 0) {
    nums1[r--] = nums1[p] >= nums2[q] ? nums1[p--] : nums2[q--];
  }

  while (p >= 0) {
    nums1[r--] = nums1[p--];
  }

  while (q >= 0) {
    nums1[r--] = nums2[q--];
  }
};
// @lc code=end
