/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    let x = 1
    let y = 2
    
    for(let i = 2; i<n; i++){
        [y,x] = [y+x,y]
        
    }
    return n==1 ? 1 : y
};