/*
 * @lc app=leetcode.cn id=448 lang=javascript
 *
 * [448] 找到所有数组中消失的数字
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
// var findDisappearedNumbers = function(nums) {
//   const map = {}
//   for (let i of nums) {
//     map[i] = 1
//   }
//   const res = []
//   for (let i = 1; i <= nums.length; i++) {
//     if (!map[i]) {
//       res.push(i)
//     }
//   }
//   return res;
// };

findDisappearedNumbers = function(nums) {
  // 官方第二种方案, 1<=a<=n, 和索引有对应关系
  nums.forEach(num => {
    const index = Math.abs(num) - 1;
    nums[index] = Math.abs(nums[index]) * -1;
  })
  
  // 遍历，为正的index + 1的值就是缺少的
  let res = []
  nums.forEach((num, i) => {
    if (num > 0) {
      res.push(i + 1)
    }
  })
  return res;
}
// console.log(findDisappearedNumbers([4,3,2,7,8,2,3,1]))
// @lc code=end

