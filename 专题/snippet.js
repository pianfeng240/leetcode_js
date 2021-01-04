// 生成长度为n的序列，每个位置都可以为 左括号或者 右括号
function generateParenthesis(n) {
  const res = [];

  const generate = (current, pos) => {
    if (pos === n) {
      res.push(current.join(""));
      return;
    }

    current[pos] = "(";
    generate(current, pos + 1);
    current[pos] = ")";
    generate(current, pos + 1);
  };

  generate([], 0);

  return res;
}
