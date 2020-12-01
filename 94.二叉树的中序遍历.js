/*
 * @lc app=leetcode.cn id=94 lang=javascript
 *
 * [94] 二叉树的中序遍历
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
 * 思路：递归, 访问顺序 左节点-根节点-右节点
 * 时间复杂度 O(n) n时二叉树的节点个数
 * 空间复杂度 O(n) 递归的栈深度，最差情况二叉树是一条链
 *
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function (root) {
  const res = [];

  const inOrder = (node) => {
    if (!node) return;

    inOrder(node.left);
    res.push(node.val);
    inOrder(node.right);
  };

  inOrder(root);
  return res;
};

/**
 * 思路：栈
 * 时间复杂度: O(n)
 * 空间复杂度 O(n)
 */
inorderTraversal = function (root) {
  const res = [];
  const stack = [];

  let node = root;
  while (node || stack.length) {
    if (node) {
      stack.push(node); // 根节点入栈
      node = node.left; // 1.遍历左子树
    } else {
      node = stack.pop();
      res.push(node.val); // 2. 取根节点的值
      node = node.right; // 3. 遍历右子树
    }
  }

  return res;
};

// inorderTraversal = function (root) {};
// @lc code=end
