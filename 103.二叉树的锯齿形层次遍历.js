/*
 * @lc app=leetcode.cn id=103 lang=javascript
 *
 * [103] 二叉树的锯齿形层次遍历
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
 * 思路：基于BFS，每层加入节点时根据锯齿要求在双端队列的头或者尾部加入
 * @param {TreeNode} root
 * @return {number[][]}
 */
var zigzagLevelOrder = function (root) {
  const res = [];
  if (!root) {
    return res;
  }

  const queue = [];
  queue.push(root);

  let left = true;
  while (queue.length) {
    const level = [];

    let len = queue.length;
    while (len--) {
      const node = queue.shift();

      if (left) {
        level.push(node.val);
      } else {
        level.unshift(node.val);
      }

      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }

    left = !left;

    res.push(level);
  }

  return res;
};
// @lc code=end
