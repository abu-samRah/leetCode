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
            if (grid[i][j] == 0){
                if (helper(i,j))count++;
            }
        }
    }

    function helper(i,j){
        if (i < 0 || j < 0 || i>=row || j>=column) return false;
        if (grid[i][j]) return true;
        grid[i][j] = true;

        let top = helper(i - 1, j)
        let bottom = helper(i + 1, j)
        let left = helper(i, j-1)
        let right = helper(i, j + 1);
        return top && bottom && left && right;

    }
    console.log(grid)
    return count
};