/*
 * @lc app=leetcode.cn id=155 lang=javascript
 *
 * [155] 最小栈
 */

// @lc code=start
/**
 * initialize your data structure here.
 */
var MinStack = function() {
  this.store = [];
  this.minStack = [];
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
  this.store.push(x);
  this.updateMinStack(x);
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
  this.store.pop();
  this.updateMinStack();
};

/**
 * 思路：每次push时把最小值存入，pop时同时操作最小栈
 * @param {} x 
 */
MinStack.prototype.updateMinStack = function(x) {
  if (x !== undefined) {
    const min = this.minStack[this.minStack.length - 1];
    this.minStack.push(min !== undefined ? Math.min(x, min) : x);
    return
  }
  this.minStack.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
  return this.store[this.store.length - 1] || null;
};

/**
 * 时间复杂度 O(1)
 * 空间复杂度 O(n)
 * @return {number}
 */
MinStack.prototype.getMin = function() {
  return this.minStack[this.minStack.length - 1] || null;
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
// @lc code=end

