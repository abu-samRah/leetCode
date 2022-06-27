/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
var diagonalSort = function(mat) {
    const m = mat.length
    const n = mat[0].length
    
    for(let col =0; col<n ; col++) sort(mat,0,col,m,n)
    
    for(let row =1; row<m ; row++) sort(mat,row,0,m,n)
    
    return mat
    
};

const sort = (mat,row,col,m,n) =>{
    const values = []
    let currRow = row
    let currCol = col
    
    while(currRow < m && currCol < n){
        values.push(mat[currRow][currCol])
        currRow++
        currCol++
    }
    values.sort((a,b) => a-b)
    
    currRow = row
    currCol = col
    let index = 0
    
     while(currRow < m && currCol < n){
        mat[currRow][currCol] = values[index]
        currRow++
        currCol++
        index++
    }
    
}