/*
 * @lc app=leetcode.cn id=234 lang=javascript
 *
 * [234] 回文链表
 * 思路：遍历链表，记录到数组，双指针判断数组是否回文
 * 时间复杂度: O(n)
 * 空间复杂度: O(n)
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
var isPalindrome = function(head) {
  let cur = head;
  const arr = []
  while(cur) {
    arr.push(cur.val)
    cur = cur.next;
  }

  let left = 0;
  let right = arr.length - 1;
  while(left < right) {
    if (arr[left] !== arr[right]) return false
    left++
    right--
  }
  return true;
};

/**
 * 思路：找到链表中间节点，反转后面的链表，从头开始比较是否相等
 * 最后再次反转后半段链表，完成复原
 * 时间复杂度: O(n)
 * 空间复杂度: O(1)
 */
isPalindrome = function(head) {
  if (head === null) return true;
  
  const half = findHalfNode(head);

  // 反转后半段
  const reversed = reverseList(half.next);

  // 和head比较
  let result = true;
  let p1 = head;
  let p2 = reversed;
  while(result && p2 !== null) {
    if(p1.val !== p2.val) result = false;
    p1 = p1.next;
    p2 = p2.next;
  }

  // 反转后半段，恢复列表
  half.next = reverseList(reversed);
  return result;
}

function reverseList(head) {
  let prev = null;
  let cur = head;

  while(cur) {
    const next = cur.next;

    cur.next = prev;
    prev = cur;
    cur = next;
  }
  return prev;
}

function findHalfNode(head) {
  let slow = head;
  let fast = head;

  while(fast.next !== null && fast.next.next !== null) {
    fast = fast.next.next;
    slow = slow.next;
  }
  return slow;
}
// @lc code=end

