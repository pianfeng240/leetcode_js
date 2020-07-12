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
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
  if (root === null) return []

  const res = []
  const q = []
  q.push(root)

  while(q.length) {
    const temp = []

    for (let i = 0, len = q.length; i < len; i++) {
      const cur = q.shift();
      temp.push(cur.val)

      if (cur.left !== null) {
        q.push(cur.left)
      }

      if (cur.right !== null) {
        q.push(cur.right)
      }
    }

    res.push(temp)
  }

  return res;
};
// @lc code=end

