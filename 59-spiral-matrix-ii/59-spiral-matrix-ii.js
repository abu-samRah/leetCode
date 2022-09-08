/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function(n) {
    let matrix = [...Array(n)].map(e=> new Array(n))
    let left = 0
    let right = matrix[0].length
    let top = 0
    let bottom = matrix.length
    let count = 1
    while(left<right && top<bottom){
        for(let i = left; i<right; i++)
            matrix[top][i] = count++
        top++
        
        for(let i=top; i<bottom; i++)
            matrix[i][right-1] = count++
        right--
        
        if(left>=right || top>=bottom) break
        
        for(let i=right-1; i>=left; i--)
            matrix[bottom -1][i] = count++
        bottom--
        
        for(let i=bottom-1; i>=top; i--)
            matrix[i][left] = count++
        left++
    }
    
    return matrix
};