/*
 * @lc app=leetcode.cn id=124 lang=javascript
 *
 * [124] 二叉树中的最大路径和
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
 * 思路：
 * 1.从父节点下来的路径，不能走完左子树又走右子树，不能两头收益。
 * 2.路径不一定经过根节点，说明最大路径可能产生于局部子树。
 * 时间复杂度 O(N),遍历每个节点
 * 空间复杂度 O(N), 递归栈的深度, 最坏情况分析是一条链，等于所有节点数
 * @param {TreeNode} root
 * @return {number}
 */
var maxPathSum = function (root) {
  let max = Number.MIN_SAFE_INTEGER;

  const dfs = function (node) {
    if (node === null) return 0;

    const nodeValue = node.val;
    const left = dfs(node.left);
    const right = dfs(node.right);

    const innerSum = nodeValue + left + right;
    // 子树的内部路径和是否是最大值
    max = Math.max(max, innerSum);

    // 子树能给父节点提供的最大收益，有两种情况，
    // 1 子树根节点值 + 左子树能提供的最大收益， 2 子树根节点值 + 右子树能提供的最大收益，
    const returnSum = Math.max(nodeValue + left, nodeValue + right);
    // 对外提供的是负值，就返回0，表示无收益，
    if (returnSum < 0) {
      return 0;
    }

    return returnSum;
  };

  dfs(root);

  return max;
};
// @lc code=end
