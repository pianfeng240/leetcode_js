/*
 * @lc app=leetcode.cn id=98 lang=javascript
 *
 * [98] 验证二叉搜索树
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
function dfs(node, lower, upper) {
  if (node === null) return true;

  const val = node.val;
  if (upper !== null && val >= upper) return false;
  if (lower !== null && val <= lower) return false;

  if (!dfs(node.left, lower, val)) {
    return false;
  }

  if (!dfs(node.right, val, upper)) {
    return false;
  }
  
  return true;
}
/** 递归
 * 思路：辅助函数参数包含当前节点，上界、下界，遍历左子树有上界，右子树有下界
 * 时间复杂度: O(n)
 * 空间复杂度: O(n), 递归栈深度，树的高度，最坏是一条链，也就是O(n)
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function(root) {
  return dfs(root, null, null);
};

/**
 * 中序遍历,递归方式
 * 思路：二叉搜索树中序遍历的结果是升序
 * 时间复杂度: 0(n)
 * 空间复杂度: O(n)
 * 
 */
let prev = null;
isValidBST = function (root, reset) {
  // 用例[0]无法通过，prev值是3，是上一个用例的值
  if (reset === undefined) {
    prev = null;
  }

  if (root === null) return true;
  
  // 遍历左子树
  if (!isValidBST(root.left, false)) return false;

  // 当前节点小等于前一个节点，不是BST
  if (prev !== null && root.val <= prev) return false;

  prev = root.val;

  return isValidBST(root.right, false);
}

//todo: 中序遍历，非递归方式
// @lc code=end

