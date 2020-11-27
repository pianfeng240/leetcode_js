/*
 * @lc app=leetcode.cn id=328 lang=javascript
 *
 * [328] 奇偶链表
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
 * @param {ListNode} head
 * @return {ListNode}
 */
var oddEvenList = function (head) {
  let cur = head;
  if (!cur || !cur.next) return head;

  let walk = cur.next.next; // 3

  while (walk) {
    let walkNext = walk.next;
    let curNext = cur.next;

    cur.next = walk;
    walk.next = curNext;

    let t = curNext;
    while (t.next !== walk) {
      t = t.next;
    }
    t.next = walkNext;

    cur = cur.next;
    walk = (walkNext && walkNext.next) || null;
  }

  return head;
};

/**
 * 思路：通过odd和even两个指针维护奇数和偶数节点
 * 时间复杂度 O(n)
 * 空间复杂度 O(1)
 */
oddEvenList = function (head) {
  if (!head || !head.next) return head;

  let odd = head;
  let evenHead = head.next;
  let even = evenHead;

  // 结束条件和修改顺序很重要
  while (even && even.next) {
    odd.next = even.next;
    odd = odd.next;
    even.next = odd.next;
    even = even.next;
  }

  odd.next = evenHead;

  return head;
};

// function ListNode(val, next) {
//   this.val = val === undefined ? 0 : val;
//   this.next = next === undefined ? null : next;
// }
// const n5 = new ListNode(5);
// const n4 = new ListNode(4, n5);
// const n3 = new ListNode(3, n4);
// const n2 = new ListNode(2, n3);
// const n1 = new ListNode(1, n2);
// console.log(oddEvenList(n1));
// @lc code=end
