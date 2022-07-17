/**
 * @param {number[][]} grid
 * @return {number}
 */
var shortestPathBinaryMatrix = function(grid) {
    let ans = 1
    let queue = [[0,0]]
    let len = queue.length , i=0
    if(grid[0][0]) return -1
    
    while(i<len){
        // pop front
        const front = queue.shift()
        const row = front[0]
        const col = front[1]
        
        // check goal
        if(isGoal(row,col,grid)) return ans
        
        //neighbors
        const dx = [1,-1,0,0,1,-1,1,-1]
        const dy = [0,0,1,-1,1,-1,-1,1]
        
        for(let i=0; i<8; i++){
            if(check(row+dx[i] , col+dy[i], grid)) {
                queue.push([row+dx[i],col+dy[i]])
                grid[row+dx[i]][col+dy[i]] = 1
            }
        }
        i++
         //check level is over
        if(i>=len){
            ans++
            len = queue.length 
            i = 0
        }
       
    }
    
    return -1
};
    
const isGoal = (row, col, grid) =>{
    return row === grid.length -1 && col === grid[0].length -1 
}

const check = (row, col, grid) =>{
    return row < grid.length && col < grid[0].length && row >= 0 && col >= 0 && !grid[row][col] 
}