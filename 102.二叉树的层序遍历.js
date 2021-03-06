/*
 * @lc app=leetcode.cn id=102 lang=javascript
 *
 * [102] 二叉树的层序遍历
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
 * 思路：BFS,
 * 时间复杂度 O(N), N是所有节点数，每个节点进出队列一次
 * 空间复杂度 o(N), 除了输出数组，还有一个队列，最多存储两层节点。
 * 包含最多节点的层可能是完全二叉树的叶子节点层，大约有L=N/2个节点。 2L = N
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
  const res = [];
  if (root === null) return res;

  const queue = [];
  queue.push(root);

  while (queue.length) {
    const level = [];

    let len = queue.length;
    while (len--) {
      const node = queue.shift();

      level.push(node.val);

      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }

    res.push(level);
  }

  return res;
};
// @lc code=end
