var snakesAndLadders = function(board) {
  const N = board.length;
  const getLoc = (pos) => {
    let row = Math.floor((pos - 1) / N);
    let col = (pos - 1) % N;
    col = (row % 2) === 1 ? N - col - 1 : col;
    row = N - row - 1;
    return [row,col];
  }
  const q = [1];
  let ans = 0
  let currLen = q.length, i = 0
  
  while(i<currLen) {
    const n = q.shift();
    if(n === N*N) return ans;
    for(let i = n+1; i <= Math.min(n+6, N*N); i++) {
      const [r, c] = getLoc(i);
      const next = board[r][c] === -1 ? i : board[r][c];
      if(board[r][c] !== 'X') {
        q.push(next);
        board[r][c] = 'X'
      }
    }
      i++
      if(i >= currLen){
          currLen = q.length
          i = 0
          ans++
      }
  }
  
  return -1;
};