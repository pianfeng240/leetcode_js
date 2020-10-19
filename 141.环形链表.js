/*
 * @lc app=leetcode.cn id=141 lang=javascript
 *
 * [141] 环形链表
 * 思路：快慢指针。初识都是head，快指针每次走2步，慢指针移动1步，如果快慢相等，说明有环。
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
 * @return {boolean}
 */
var hasCycle = function(head) {
  let slow = head;
  let fast = head;
  
  while(fast !== null && fast.next !== null) {
    fast = fast.next.next
    slow = slow.next;

    if (fast === slow) return true;
  }

  return false;
};
// @lc code=end

