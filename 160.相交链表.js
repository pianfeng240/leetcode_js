/*
 * @lc app=leetcode.cn id=160 lang=javascript
 *
 * [160] 相交链表
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
 * 思路：遍历a链表，把所有节点记录到hashmap，遍历b链表，看是否有重复
 * 时间复杂度 O(m + n)
 * 空间复杂度 O(m), m是a的长度
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
  let map = new Map();

  let pa = headA;
  while (pa) {
    map.set(pa, 1);
    pa = pa.next;
  }

  let pb = headB;
  while (pb) {
    if (map.has(pb)) {
      return pb;
    }
    pb = pb.next;
  }

  return null;
};

/**
 * 思路：双指针，pA和pB分别指向开头，每次前进一步
 * 如果列表长度相同，指针指向同一位置或者null时计数。
 * 列表长度不同，某个指针走到末尾后，重置到另一个列表的开头，继续走,这样两者走过的路程就会相同
 * 时间复杂度 O(m + n),两个链表的长度和
 * 空间复杂度 O(1)
 *
 */
getIntersectionNode = function (headA, headB) {
  if (!headA || !headB) return null;

  let pA = headA;
  let pB = headB;

  while (pA !== null || pB !== null) {
    if (pA === pB) {
      return pA;
    }

    if (pA === null) {
      pA = headB;
    } else if (pB === null) {
      pB = headA;
    } else {
      pA = pA.next;
      pB = pB.next;
    }
  }

  return null;
};
// @lc code=end
