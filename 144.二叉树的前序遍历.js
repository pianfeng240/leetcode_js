/*
 * @lc app=leetcode.cn id=144 lang=javascript
 *
 * [144] 二叉树的前序遍历
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
 * 思路：递归
 * 时间复杂度 O(n) n是二叉树节点个数
 * 空间复杂度 O(n),
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal = function (root) {
  const res = [];

  const preOrder = (node) => {
    if (!node) return;
    res.push(node.val);
    preOrder(node.left);
    preOrder(node.right);
  };

  preOrder(root);

  return res;
};

/**
 * 思路：栈
 * 时间复杂度 O(n) n是二叉树节点个数
 * 空间复杂度 O(n),
 */
preorderTraversal = function (root) {
  const res = [];
  const stack = [];

  let node = root;
  while (node || stack.length) {
    if (node) {
      res.push(node.val); // 1.取根节点的值
      stack.push(node); // 根节点入栈
      node = node.left; // 2.遍历左子树
    } else {
      node = stack.pop();
      node = node.right; // 3. 遍历右子树
    }
  }

  return res;
};

// TODO: Morris遍历
// @lc code=end
