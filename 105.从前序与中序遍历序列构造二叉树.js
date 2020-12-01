/*
 * @lc app=leetcode.cn id=105 lang=javascript
 *
 * [105] 从前序与中序遍历序列构造二叉树
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
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {
  if (!preorder.length || !inorder.length) return null;

  const root = new TreeNode(preorder[0]); // 先序: 根左右
  const rootIndex = inorder.indexOf(preorder[0]); // 中序: 左根右

  // img:https://pic.leetcode-cn.com/1b7496cf5eec7c2125fbc83ba9a79848dcc3416c66d4264fa4590ee3351e6c08-%E6%96%B0%E5%BB%BA%20Microsoft%20PowerPoint%20%E6%BC%94%E7%A4%BA%E6%96%87%E7%A8%BF.png
  root.left = buildTree(
    preorder.slice(1, rootIndex + 1),
    inorder.slice(0, rootIndex)
  );
  root.right = buildTree(
    preorder.slice(rootIndex + 1),
    inorder.slice(rootIndex + 1)
  );

  return root;
};
// @lc code=end
