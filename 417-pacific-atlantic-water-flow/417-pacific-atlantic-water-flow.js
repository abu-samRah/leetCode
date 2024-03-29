var pacificAtlantic = function(matrix) {
   if (matrix.length === 0) return [] 
   let numRows = matrix.length
   let numCols = matrix[0].length
   
   let atlantic = []
   let pacific = []
   for (let i = 0;i<numRows;i++){
       atlantic.push(new Array(numCols).fill(false))
       pacific.push(new Array(numCols).fill(false))
   }
   
   for (let col=0 ;col<matrix[0].length;col++){
       dfs(matrix, 0, col, matrix[0][col], pacific)
       dfs(matrix, numRows - 1, col, matrix[numRows - 1][col], atlantic)
   }
    
    for (let row = 0;row<matrix.length; row++){
        dfs(matrix, row, 0, matrix[row][0], pacific)
        dfs(matrix, row, numCols - 1, matrix[row][numCols - 1], atlantic)
    }
    
    let res = []
    for (let i=0;i<numRows;i++){
        for (let j=0;j<numCols;j++){
            if (atlantic[i][j] && pacific[i][j]){
                res.push([i, j])
            }
        }
    }
    return res
}
   


const dfs = (matrix, i, j, prev, ocean) =>{
  //checkOutOfBounds
    if (i<0 ||
       i > matrix.length -1 ||
       j < 0 ||
       j > matrix[i].length - 1 ||
       ocean[i][j] ||
       matrix[i][j] < prev
      ) return
    

    ocean[i][j] = true
    
    dfs(matrix, i+1, j, matrix[i][j], ocean)
    dfs(matrix, i-1, j, matrix[i][j], ocean)
    dfs(matrix, i, j+1, matrix[i][j], ocean)
    dfs(matrix, i, j-1, matrix[i][j], ocean)    
}
