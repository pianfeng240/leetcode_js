/*
 * @lc app=leetcode.cn id=83 lang=javascript
 *
 * [83] 删除排序链表中的重复元素
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
var deleteDuplicates = function(head) {
  if (!head) return head;

  let slow = head;
  let fast = head.next;
  while (fast) {
    if (fast.val !== slow.val) {
      slow.next = fast
      slow = fast
    }
    fast = fast.next
  }

  // 断开和末尾重复元素的连接
  slow.next = null

  return head;
  
};
// @lc code=end

