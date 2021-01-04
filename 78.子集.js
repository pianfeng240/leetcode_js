/*
 * @lc app=leetcode.cn id=78 lang=javascript
 *
 * [78] 子集
 */

// @lc code=start
/**
 * 思路：迭代实现子集枚举。每个数字分为在子集中和不在子集中两个状态，
 * 可以对应到一个长度为n的01序列，所有子集共2 ^ (n - 1)种
 * 时间复杂度 O(n * 2 ^ n),
 * 空间复杂度 O(n)
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
  const res = [];
  const len = nums.length;
  const size = Math.pow(2, len);

  // 一共有size个子集
  for (let value = 0; value < size; value++) {
    const sub = [];

    const str = Number(value).toString(2);

    // 二进制位对应数组中序号的偏移量。2 => 10,
    const start = len - str.length;

    for (let i = 0; i < str.length; i++) {
      if (str[i] === "1") {
        // 把对应的数字加入到子集
        sub.push(nums[start + i]);
      }
    }

    res.push(sub);
  }
  return res;
};

/**
 * 思路：先加入空集，每次遍历集合，都在原来的子集后面追加新值
 * 第一步，添加空集 []
 * 第二步，取1，[], [1]
 * 第三步, 取2, [], [2], [1], [1,2]
 * 第四步, 取3, [], [3], [2], [2,3], [1], [1,3], [1,2], [1,2,3]
 */
subsets = function (nums) {
  const res = [[]];

  nums.forEach((value) => {
    const len = res.length;
    for (let i = 0; i < len; i++) {
      res.push([...res[i], value]);
    }
  });

  return res;
};

/**
 * 思路：回溯
 * 每个元素都分两种情况，选 或 不选。
 *
 */
subsets = function (nums) {
  const res = [];

  const dfs = (index, list) => {
    if (index === nums.length) {
      res.push(list.slice());
      return;
    }

    list.push(nums[index]);
    dfs(index + 1, list);
    list.pop();
    dfs(index + 1, list);
  };

  dfs(0, []);

  return res;
};

/**
 * 思路：每次看有几个数可以选
 */
subsets = function (nums) {
  const res = [];

  const dfs = (index, list) => {
    res.push(list);
    for (let i = index; i < nums.length; i++) {
      list.push(nums[i]);
      dfs(index + 1, list);
      list.pop();
    }
  };

  dfs(0, []);

  return res;
};
// console.log(subsets([1, 2, 3]));
// @lc code=end
