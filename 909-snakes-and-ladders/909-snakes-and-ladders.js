var snakesAndLadders = function(board) {
  const N = board.length;
  
  const q = [1];
  let ans = 0
  let currLen = q.length, i = 0
  
  while(i<currLen) {
    const current = q.shift();
    if(isGoal(current,N)) return ans;
    for(let i = current+1; i <= Math.min(current+6, N*N); i++) {
      const [r, c] = getLoc(i,N);
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

const isGoal = (current , N) => current === N*N
const getLoc = (pos,N) => {
    let row = Math.floor((pos - 1) / N);
    let col = (pos - 1) % N;
    col = (row % 2) === 1 ? N - col - 1 : col;
    row = N - row - 1;
    return [row,col];
  }