/*
 * @lc app=leetcode.cn id=101 lang=javascript
 *
 * [101] 对称二叉树
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
function check(p = null, q = null) {
  if (!p && !q) return true;
  if (!p || !q) return false;

  if(p === q) return check(p.left, q.right);

  return p.val === q.val && check(p.left, q.right) && check(p.right, q.left);
}
/**
 * 递归
 * 思路：通过两个指针在树上移动，比较左右是否相等
 * 时间复杂度: O(n)
 * 空间复杂度: O(n)
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {
    return check(root, root);
};

/**
 * 迭代
 * 思路：
 * 时间复杂度
 * 空间复杂度
 */
isSymmetric = function(root) {
  const q = []
  q.push(root)
  q.push(root)
  while(q.length) {
    const u = q.shift();
    const v = q.shift();

    if (u === null && v === null) continue;
    
    if ((u === null || v === null) || (u.val !== v.val)) return false;

    q.push(u.left)
    q.push(v.right)

    q.push(u.right)
    q.push(v.left)
  }

  return true;

}
// @lc code=end

