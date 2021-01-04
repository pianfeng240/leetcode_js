/*
 * @lc app=leetcode.cn id=99 lang=javascript
 *
 * [99] 恢复二叉搜索树
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

const swap = function (x, y) {
  if (x !== null && y !== null) {
    const tmp = x.val;
    x.val = y.val;
    y.val = tmp;
  }
};

/**
 * 思路：bst的中序遍历是递增序列。交换2个节点会有两种情况，
 * 1. 交换相邻节点，递增序列会出现1个异常组合 a[i] > a[i+1]，交换两节点值即可
 * 2. 交换不相连节点，序列会出现2个异常组合 a[i] > a[i+1], a[j] > a[j+1], 交换a[i]和a[j+1]
 * 中序遍历，存到数组中，遍历找到异常组合，交换
 * 时间复杂度 O(N)
 * 空间复杂度 O(N)
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
var recoverTree = function (root) {
  let x = null;
  let y = null;
  const list = [];

  const inorder = (node) => {
    if (node === null) {
      return;
    }

    inorder(node.left);
    list.push(node);
    inorder(node.right);
  };

  inorder(root);

  // 遍历数组
  for (let i = 0; i < list.length - 1; i++) {
    if (list[i].val > list[i + 1].val) {
      y = list[i + 1];

      if (x === null) {
        x = list[i];
      }
    }
  }

  swap(x, y);
};

/**
 * 思路：使用prev变量记录上一个节点，代替数组方案。
 * 时间复杂度 O(N)
 * 空间复杂度 O(H)，递归栈的深度
 */
recoverTree = function (root) {
  let x = null;
  let y = null;
  let prev = new TreeNode(Number.MIN_SAFE_INTEGER);

  const inorder = (node) => {
    if (node === null) {
      return;
    }

    inorder(node.left);

    if (prev.val > node.val) {
      y = node;

      if (x === null) {
        x = prev;
      }
    }

    prev = node;

    inorder(node.right);
  };

  inorder(root);

  swap(x, y);
};

/**
 * 思路：moris遍历。
 * 利用叶子节点的左右指针为空的特性，
 * 时间复杂度 O(N)
 * 空间复杂度 O(1)
 */
recoverTree = function (root) {
  let x = null;
  let y = null;
  let prev = null;

  while (root !== null) {
    if (root.left !== null) {
      // 中序遍历的前序节点，是左子树的最右节点，往左一步，然后一直向右
      let predecessor = root.left;
      while (predecessor.right && predecessor.right !== root) {
        predecessor = predecessor.right;
      }

      if (predecessor.right === null) {
        // 前序的右指针指向root，继续遍历左子树
        predecessor.right = root;
        root = root.left;
      } else {
        // 说明左子树遍历完了，
        if (prev !== null && root.val < prev.val) {
          y = root;
          if (x === null) {
            x = prev;
          }
        }

        // 断开前序节点到root的链接
        predecessor.right = null;

        prev = root;

        // 继续遍历右子树
        root = root.right;
      }
    } else {
      if (prev !== null && root.val < prev.val) {
        y = root;
        if (x === null) {
          x = prev;
        }
      }
      prev = root;
      root = root.right;
    }
  }

  swap(x, y);
};

// @lc code=end
