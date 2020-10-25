/*
 * @lc app=leetcode.cn id=108 lang=javascript
 *
 * [108] 将有序数组转换为二叉搜索树
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * 思路：中序遍历，选择中间位置左侧的数字作为根节点
 * 时间复杂度: O(n)
 * 空间复杂度: O(logn),递归栈深度
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
  return helper(nums, 0, nums.length - 1);
};

function helper(num, left, right) {
  if (left > right) return null;

  const mid = parseInt((left + right) / 2);

  let root = new TreeNode(num[mid]);
  root.left = helper(num, left, mid - 1);
  root.right = helper(num, mid + 1, right)

  return root;
}
// @lc code=end

