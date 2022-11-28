/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function(n) {
    const solutions = [];
    
    const cols = new Set();
    const posDiag = new Set();
    const negDiag = new Set();
    
    const board = Array.from({ length: n }, () => new Array(n).fill('.'));
  
    function backtrack (row) {
        if (row === n) {
            solutions.push(board.map(a => a.join('')));
            return;
        }
        
        for (let col = 0; col < n; col += 1) {
            if (cols.has(col) || posDiag.has(row + col) || negDiag.has(row - col)) {
                continue;
            }
            
            cols.add(col);
            posDiag.add(row + col);
            negDiag.add(row - col);
            board[row][col] = 'Q';
            
            backtrack(row + 1);
            
            cols.delete(col);
            posDiag.delete(row + col);
            negDiag.delete(row - col);
            board[row][col] = '.';
        }   
    }
    
    backtrack(0);
    
    return solutions;
};