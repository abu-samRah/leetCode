/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    const row = grid.length
    const column = grid[0].length
    let islands = 0
    
    for(let i=0; i< row ; i++)
        for(let j=0; j< column ; j++)
            if(grid[i][j] === '1'){
                islands++
                dfs(grid, i, j)
            }
    return islands
};

const dfs = (grid, i, j) =>{
    if( i<0 || j<0 || i>=grid.length || j>=grid[0].length || grid[i][j] === "0" ) return 0
    grid[i][j] = "0"
    dfs(grid,i+1,j)
    dfs(grid,i-1,j)
    dfs(grid,i,j+1)
    dfs(grid,i,j-1)
}