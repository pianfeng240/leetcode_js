/*
 * @lc app=leetcode.cn id=384 lang=javascript
 *
 * [384] 打乱数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 */
var Solution = function(nums) {
  this.raw = nums.slice(0);
  this.array = nums;
};

/**
 * 生成[start, end)范围内的随机整数
 * @param {*} end 
 * @param {*} start 
 */
Solution.getRandom = function (end, start = 0) {
  return Math.floor(Math.random() * (end - start) + start);
}

/**
 * Resets the array to its original configuration and return it.
 * @return {number[]}
 */
Solution.prototype.reset = function() {
  this.array = this.raw.slice(0);
  return this.array;
};

/**
 * Returns a random shuffling of the array.
 * 思路：
 * 时间复杂度 O(n^2) splice删除数组元素
 * 空间复杂度 O(n) 储存原来的数组
 * @return {number[]}
 */
Solution.prototype.shuffle = function() {
  const clone = this.array.slice(0);
  for(let i = 0; i < this.array.length; i++) {
    const randomIndex = Solution.getRandom(clone.length);
    const value = clone[randomIndex]
    clone.splice(randomIndex, 1);
    this.array[i] = value;
  }
  return this.array;
};

/**
 * 思路：Fisher-Yates（费雪耶兹）洗牌算法。
 * 从当前元素到末尾，取一个随机数，和当前元素交换。注意，当前元素也可以和自己交换
 */
Solution.prototype.shuffle = function() {
  const len = this.array.length;
  for(let i = 0; i < len; i++) {
    const randomIndex = Solution.getRandom(len, i);
    if (randomIndex === i) continue;

    // swap
    [this.array[randomIndex], this.array[i]] = [this.array[i], this.array[randomIndex]]
  }
  return this.array;
};

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.reset()
 * var param_2 = obj.shuffle()
 */
// @lc code=end

