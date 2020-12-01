/*
 * @lc app=leetcode.cn id=230 lang=javascript
 *
 * [230] 二叉搜索树中第K小的元素
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * 思路: 中序遍历，返回第k-1个元素
 * 时间复杂度 O(N), N是节点个数
 * 空间复杂度 O(N)，数组存储所有节点
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function (root, k) {
  const res = [];
  const inorder = (node) => {
    if (!node) return;
    inorder(node.left);
    res.push(node.val);
    inorder(node.right);
  };
  inorder(root);
  return res[k - 1];
};

/**
 * 思路：中序遍历，迭代实现。
 * 时间复杂度 O(H+k), H是树的高度。开始判断前需要先到达叶子节点。
 * 树平衡时，复杂度为O(logN + K). 树不平衡时, 最坏是节点都在左子树，为O(N + k)
 * 空间复杂度 O(H + k)
 */
kthSmallest = function (root, k) {
  const stack = [];
  while (true) {
    if (root) {
      stack.push(root);
      root = root.left;
    } else {
      root = stack.pop();
      k--;
      if (k == 0) return root.val;
      root = root.right;
    }
  }
};
// @lc code=end
