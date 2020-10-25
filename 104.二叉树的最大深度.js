/*
 * @lc app=leetcode.cn id=104 lang=javascript
 *
 * [104] 二叉树的最大深度
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
 * 思路：递归，最大深度等于左、右子树的最大深度 + 1
 * 时间复杂度: O(n), 遍历所有的节点
 * 空间复杂度: O(height), 递归函数需要栈空间，栈空间区取决于递归的深度，因此空间
 * 复杂度等价于二叉树的高度
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
  if (root === null) return 0;
  return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
}

/**
 * 思路：广度优先（层序遍历），队列中放的是每一层的所有节点。拓展下一层前，队列处理完
 * 时间复杂度: O(n)
 * 空间复杂度: 队列存储的元素数量，最坏情况下O(n)？
 */
maxDepth = function(root) {
  if (!root) return 0;
  let q = []
  let height = 0;
  q.push(root)
  while(q.length) {
    let len = q.length;
    while(len--) {
      const node = q.shift();
      if (node.left) q.push(node.left)
      if (node.right) q.push(node.right)
    }
    height += 1
  }
  return height;
}
// @lc code=end

