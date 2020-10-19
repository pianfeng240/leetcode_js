/*
 * @lc app=leetcode.cn id=206 lang=javascript
 *
 * [206] 反转链表
 * 思路：迭代。遍历链表，当前元素的next指向前一个元素。
 * 时间复杂度: O(n)
 * 空间复杂度: O(1)
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
  let prev = null;
  let cur = head;

  while(cur) {
    const next = cur.next;

    cur.next = prev;
    prev = cur;
    cur = next;
  }

  return prev;
};

/**
 * 递归
 * 思路：n_k.next.next = n_k
 * 时间复杂度: O(n)
 * 空间复杂度: O(n), 使用递归，会使用隐式递归栈，递归深度可能会到n层
 */
reverseList = function(head) {
  if (head === null || head.next === null) return head;

  let p = reverseList(head.next)
  head.next.next = head
  head.next = null;
  return p;
}
// @lc code=end

