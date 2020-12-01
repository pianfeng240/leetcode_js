/*
 * @lc app=leetcode.cn id=200 lang=javascript
 *
 * [200] 岛屿数量
 */

// @lc code=start
/**
 * 思路：DFS, 遍历每个元素，为1时进行dfs。dfs将该位置置0，对上下左右为1的元素继续dfs
 * 时间复杂度 O(M * N), 遍历数组每个元素, 每个元素最多2次
 * 空间复杂度 O(M * N), 最坏情况整个都是陆地，dfs的深度是M * N
 * @param {character[][]} grid
 * @return {number}
 */
function dfs(grid, r, c) {
  const nr = grid.length;
  const nc = grid[0].length;

  grid[r][c] = "0";

  // 看四周是否有1，有的话继续dfs
  if (r - 1 >= 0 && grid[r - 1][c] === "1") dfs(grid, r - 1, c);
  if (r + 1 < nr && grid[r + 1][c] === "1") dfs(grid, r + 1, c);
  if (c - 1 >= 0 && grid[r][c - 1] === "1") dfs(grid, r, c - 1);
  if (c + 1 < nc && grid[r][c + 1] === "1") dfs(grid, r, c + 1);
}
var numIslands = function (grid) {
  const nr = grid.length;
  const nc = grid[0].length;

  let islands = 0;

  for (let r = 0; r < nr; r++) {
    for (let c = 0; c < nc; c++) {
      if (grid[r][c] === "1") {
        islands += 1;
        dfs(grid, r, c);
      }
    }
  }

  return islands;
};

function bfs(grid, r, c) {
  const nr = grid.length;
  const nc = grid[0].length;

  const neighbors = [];
  neighbors.push([r, c]);

  grid[r][c] = "0";

  while (neighbors.length) {
    const [row, col] = neighbors.shift();

    if (row - 1 >= 0 && grid[row - 1][col] === "1") {
      neighbors.push([row - 1, col]);
      grid[row - 1][col] = "0";
    }
    if (row + 1 < nr && grid[row + 1][col] === "1") {
      neighbors.push([row + 1, col]);
      grid[row + 1][col] = "0";
    }
    if (col - 1 >= 0 && grid[row][col - 1] === "1") {
      neighbors.push([row, col - 1]);
      grid[row][col - 1] = "0";
    }
    if (col + 1 < nc && grid[row][col + 1] === "1") {
      neighbors.push([row, col + 1]);
      grid[row][col + 1] = "0";
    }
  }
}
/**
 * 思路：广度优先.通过队列代替上面dfs的递归
 * 时间复杂度 O(M*N)
 * 空间复杂度 O(min(M, N))
 */
numIslands = function (grid) {
  const nr = grid.length;
  const nc = grid[0].length;

  let islands = 0;
  for (let r = 0; r < nr; r++) {
    for (let c = 0; c < nc; c++) {
      if (grid[r][c] === "1") {
        islands += 1;
        bfs(grid, r, c);
      }
    }
  }

  return islands;
};

// TODO: 并查集
// @lc code=end
