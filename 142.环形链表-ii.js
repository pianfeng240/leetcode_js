/*
 * @lc app=leetcode.cn id=142 lang=javascript
 *
 * [142] 环形链表 II
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
var detectCycle = function(head) {
  let slow = head
  let fast = head

  let loop = false

  while(fast !== null && fast.next !== null) {
    fast = fast.next.next
    slow = slow.next
    
    if (fast === slow) {
      loop = true
      break;
    }
  }

  if (!loop) return null

  slow = head;
  while(slow !== fast) {
    slow = slow.next;
    fast = fast.next;
  }

  return slow
};
// @lc code=end

