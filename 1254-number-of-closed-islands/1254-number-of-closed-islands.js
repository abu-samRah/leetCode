/**
 * @param {number[][]} grid
 * @return {number}
 */
var closedIsland = function(grid) {
    let count = 0;
    let row = grid.length;
    let column = grid[0].length;
    for(let i = 0; i<row; i++){
        for(let j=0; j<column; j++){
            if (grid[i][j] === 0){
                if (isClosedIsland(i,j))count++;
            }
        }
    }

    function isClosedIsland(i,j){
        if (i < 0 || j < 0 || i>=row || j>=column) return false;
        if (grid[i][j]) return true;
        grid[i][j] = true;

        let top = isClosedIsland(i - 1, j)
        let bottom = isClosedIsland(i + 1, j)
        let left = isClosedIsland(i, j-1)
        let right = isClosedIsland(i, j + 1);
        return top && bottom && left && right;

    }
    return count
};