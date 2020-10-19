/*
 * @lc app=leetcode.cn id=19 lang=javascript
 *
 * [19] 删除链表的倒数第N个节点
 * 思路：双指针，快指针先移动n下，然后一次移动，直到快指针达到末尾。慢指针的下一个元素就是待删除的元素
 * 需要注意删除头节点
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
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
  let slow = head;
  let fast = head;
  while(n--) {
    fast = fast.next;
  }
  // 删除的是头节点
  if (fast === null) return slow.next;

  while(fast && fast.next !== null) {
    slow = slow.next;
    fast = fast.next;
  }

  slow.next = slow.next.next;

  return head;
}
// @lc code=end

