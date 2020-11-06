/*
 * @lc app=leetcode.cn id=190 lang=javascript
 *
 * [190] 颠倒二进制位
 */

// @lc code=start
/**
 * 思路：按位转换, 多次转换，效率比较低
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function(n) {
    let arr = n.toString(2).split('')

    let left = 0;
    let right = arr.length - 1;
    while(left < right) {
      const tmp = arr[right]
      arr[right] = arr[left]
      arr[left] = tmp

      left++
      right--
    }

    arr = arr.join('')
    // 末尾补0
    let missed = 32 - arr.length;
    while(missed--) {
      arr += '0'
    }

    return parseInt(arr, 2);
};

/**
 * 思路：逐位颠倒，一共32位，第i位，颠倒后是31 - i位. 
 * 那么每次和1与，就取出最右边的位，再左移31-i后和ret累加
 * 时间复杂度 O(1)，固定迭代32次
 * 空间复杂度 O(1)
 */
reverseBits = function(n) {

  let ret = 0;
  let target = 31;

  while(target >= 0) {
    // 规范要求位移运算符返回带符号的32位整数。所以1<<31是-2147483648 
    // >>> 0 可以把有符号转为无符号
    ret += (n & 1) << target >>> 0;
    n = n >> 1;
    target--;
  }
  return ret;
}

// todo： 分治，划分为更小的块，可以不用循环
// @lc code=end

