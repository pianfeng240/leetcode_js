/*
 * @lc app=leetcode.cn id=111 lang=javascript
 *
 * [111] 二叉树的最小深度
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
 * @param {TreeNode} root
 * @return {number}
 */
var minDepth = function(root) {
  if (root === null) return 0

  const queue = []

  queue.push(root)

  let depth = 1

  while(queue.length) {
    for (let i = 0, len = queue.length; i < len; i++) {
      const cur = queue.shift();

      if (cur.left === null && cur.right === null) {
        return depth
      }

      if (cur.left !== null) {
        queue.push(cur.left)
      }

      if (cur.right !== null) {
        queue.push(cur.right)
      }
    }

    depth++
  }
};
// @lc code=end

