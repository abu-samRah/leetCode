/**
 * @param {number} n
 * @return {string[]}
 */
class ParenthesesString {
  constructor(str, openCount, closeCount) {
    this.str = str;
    this.openCount = openCount;
    this.closeCount = closeCount;
  }
}


function generateParenthesis(num) {
  let result = []
  let queue = []
  queue.push(new ParenthesesString('', 0, 0));
  while (queue.length > 0) {
    const ps = queue.shift();
    if (ps.openCount === num && ps.closeCount === num) {
      result.push(ps.str);
    } else {
      if (ps.openCount < num) { 
        queue.push(new ParenthesesString(`${ps.str}(`, ps.openCount + 1, ps.closeCount));
      }
      if (ps.openCount > ps.closeCount) { 
        queue.push(new ParenthesesString(`${ps.str})`, ps.openCount, ps.closeCount + 1));
      }
    }
  }
  return result;
}
