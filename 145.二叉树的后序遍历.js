/*
 * @lc app=leetcode.cn id=145 lang=javascript
 *
 * [145] 二叉树的后序遍历
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
var postorderTraversal = function (root) {
  const res = [];

  const posOrder = (node) => {
    if (!node) return;
    posOrder(node.left);
    posOrder(node.right);
    res.push(node.val);
  };

  posOrder(root);

  return res;
};

/**
 * 思路：栈。
 * 后序先遍历左子树，再遍历右子树，最后取根节点的值。
 * 此时进行逆序处理，先取根节点的值放到结果最左边，再遍历右子树，最后遍历左子树
 */
postorderTraversal = function (root) {
  const res = [];
  const stack = [];

  let node = root;
  while (node || stack.length) {
    if (node) {
      stack.push(node); // 根节点入栈
      res.unshift(node.val); // 1. 结果最前面插入根节点的值
      node = node.right; // 2.遍历右子树
    } else {
      node = stack.pop();
      node = node.left; // 3. 遍历左子树
    }
  }

  return res;
};

// @lc code=end
