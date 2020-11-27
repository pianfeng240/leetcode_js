/*
 * @lc app=leetcode.cn id=2 lang=javascript
 *
 * [2] 两数相加
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * 思路：模拟运算
 * 时间复杂度 O(max(m, n))
 * 空间复杂度 O(max(m, n))
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  let res = new ListNode();
  let cur = res;

  let plus = 0;
  while (l1 && l2) {
    let sum = l1.val + l2.val + plus;
    if (sum >= 10) {
      plus = 1;
      sum -= 10;
    } else {
      plus = 0;
    }
    cur.next = new ListNode(sum);
    cur = cur.next;
    l1 = l1.next;
    l2 = l2.next;
  }

  let left = l1 || l2;
  while (left) {
    let sum = left.val + plus;
    if (sum >= 10) {
      plus = 1;
      sum -= 10;
    } else {
      plus = 0;
    }
    cur.next = new ListNode(sum);
    cur = cur.next;
    left = left.next;
  }

  if (plus) {
    cur.next = new ListNode(1);
  }

  return res.next;
};
// @lc code=end
