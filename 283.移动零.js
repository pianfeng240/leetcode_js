/*
 * @lc app=leetcode.cn id=283 lang=javascript
 *
 * [283] 移动零
 * 思路：把所有非0元素移到前面，之后都赋0
 * 时间复杂度: O(N), 但操作是局部优化的，执行的总的写操作是n
 * 空间复杂度: O(1)
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
  let nonZeroSize = 0;

  for(let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[nonZeroSize++] = nums[i]
    }
  }

  while(nonZeroSize < nums.length) {
    nums[nonZeroSize++] = 0
  }
};

// 最优解
// 上面解法在[0,0,...1]时赋值操作是不必要的
// 思路：当前指针遇到非0元素时，和慢指针交换值，同时前进。如果当前
// 指针是0，只增加当前指针
moveZeroes = function (nums) {
  let lastNonZeroIndex = 0;
  
  for(let cur = 0; cur < nums.length; cur++) {
    if (nums[cur] !== 0) {
      let temp = nums[cur]
      nums[cur] = nums[lastNonZeroIndex]
      nums[lastNonZeroIndex++] = temp;
    }
  }
}
// @lc code=end

