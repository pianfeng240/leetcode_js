/*
 * @lc app=leetcode.cn id=116 lang=javascript
 *
 * [116] 填充每个节点的下一个右侧节点指针
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * 思路：二叉树层序遍历。使用prev遍历指示next
 * 时间复杂度 O(N)，每个节点访问一次
 * 空间复杂度 O(N)，平衡二叉树，最后一层包含N/2个节点
 * @param {Node} root
 * @return {Node}
 */
var connect = function (root) {
  if (!root) return root;

  let level = [];
  level.push(root);

  while (level.length) {
    let count = level.length;
    let prev = null;

    while (count--) {
      const node = level.shift();
      node.next = prev;

      // 和层序遍历不同，先入右节点
      if (node.right) {
        level.push(node.right);
      }

      if (node.left) {
        level.push(node.left);
      }

      prev = node;
    }
  }

  return root;
};

// TODO: 空间复杂度O(1)
// @lc code=end
