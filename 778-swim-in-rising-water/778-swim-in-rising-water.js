/**
 * @param {number[][]} grid
 * @return {number}
 */
var swimInWater = function(grid) {
    let n = grid.length;
    
    if (n === 1) return grid[0][0];
    
    let visited = Array(n).fill(false).map(() => Array(n).fill(false));
    
    let minH = new MinPriorityQueue({priority: x => x.time});
    
    minH.enqueue({time: grid[0][0], row: 0, col: 0});
    
    let directions = [[0, 1], [0, -1], [1, 0], [-1, 0]];
    
    while(!minH.isEmpty()) {
        let {time, row, col} = minH.dequeue().element;
        
        if (row === n - 1 && col === n - 1) return time;
        
        for (let [dx, dy] of directions) {
            dx += row;
            dy += col;
            if (dx < 0 || dy < 0 || dx >= n || dy >= n || visited[dx][dy]) continue;
            visited[dx][dy] = true;
            minH.enqueue({time: Math.max(time, grid[dx][dy]), row: dx, col: dy});
        }
    }
};