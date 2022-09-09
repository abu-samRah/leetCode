/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    for(let i=0; i<9; i++){
        let row = {}
        let col = {}
        let box = {}
        console.log('****')
        for(let j =0; j<9; j++){
            const currRow = board[i][j]
            const currCol = board[j][i]
            let currBox = board[3*Math.floor(i/3)+Math.floor(j/3)][3*(i%3)+(j%3)]
        
            if(row[currRow] || col[currCol] || box[currBox])return false
            
            if(currRow !== '.') row[currRow] = currRow
            if(currCol !== '.') col[currCol] = currCol
            if(currBox !== '.') box[currBox] = currBox
        }
    }
    
    return true
};