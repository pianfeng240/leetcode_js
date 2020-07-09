/*
 * @lc app=leetcode.cn id=752 lang=javascript
 *
 * [752] 打开转盘锁
 */

// @lc code=start
/**
 * @param {string[]} deadends
 * @param {string} target
 * @return {number}
 */
var openLock = function(deadends, target) {
  const queue = []
  const visited = new Set()
  const deads = new Set(deadends)

  queue.push('0000')
  visited.add('0000')

  let step = 0;

  var pokeUp = function(str, j) {
    const ch = str.split('')
    if (ch[j] === '9') {
      ch[j] = '0'
    } else {
      ch[j] = String(Number(ch[j]) + 1)
    }
    return ch.join('')
  }
  
  var pokeDown = function(str, j) {
    const ch = str.split('')
    if (ch[j] === '0') {
      ch[j] = '9'
    } else {
      ch[j] = String(Number(ch[j]) - 1)
    }
    return ch.join('')
  }

  while(queue.length) {
    // console.log('--', queue.join())
    for (let i = 0, len = queue.length; i < len; i++) {
      const cur = queue.shift();

      if (deads.has(cur)) continue;

      if (cur === target) return step;


      for (let j = 0; j < 4; j++) {

        const up = pokeUp(cur, j)
        if (!visited.has(up)) {
          queue.push(up)
          // 避免队列重复
          visited.add(up)
        }

        const down = pokeDown(cur, j)
        if (!visited.has(down)) {
          queue.push(down)
          visited.add(down)
        }
      }
    }

    step++;
  }

  return -1
};

/**
 *  双向BFS
 */
openLock2 = function (deadends, target) {
  const deads = new Set(deadends)
  let q1 = new Set()
  let q2 = new Set()
  const visited = new Set()

  q1.add('0000')
  q2.add(target)

  var pokeUp = function(str, j) {
    const ch = str.split('')
    if (ch[j] === '9') {
      ch[j] = '0'
    } else {
      ch[j] = String(Number(ch[j]) + 1)
    }
    return ch.join('')
  }
  
  var pokeDown = function(str, j) {
    const ch = str.split('')
    if (ch[j] === '0') {
      ch[j] = '9'
    } else {
      ch[j] = String(Number(ch[j]) - 1)
    }
    return ch.join('')
  }

  let step = 0;

  while(q1.size && q2.size) {
    const temp = new Set()

    for (let cur of q1) {

      if (deads.has(cur)) continue;
      if (q2.has(cur)) return step;

      // set自带去重，所以和普通bfs相比，可以只在一处更新visited
      visited.add(cur)


      for (let j = 0; j < 4; j++) {
        const up = pokeUp(cur, j)
        if (!visited.has(up)) {
          temp.add(up)
        }
  
        const down = pokeDown(cur, j)
        if (!visited.has(down)) {
          temp.add(down)
        }
      }
    }

    q1 = q2
    q2 = temp

    step++;
  }

  return -1;
}

openLock(["8887","8889","8878","8898","8788","8988","7888","9888"], "8888")

// @lc code=end

