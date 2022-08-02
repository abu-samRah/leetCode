/**
 * @param {number} n
 * @return {number}
 */
var tribonacci = function(n) {
    const memo = {}
    
    const helper = (n) =>{
        if(memo[n]) return memo[n]
        if( n === 0 ) return 0
        if( n === 1 || n === 2) return 1
        memo[n] =  helper(n-1)  + helper(n-2)  + helper(n-3)  
        return memo[n]
    }
    
   return helper(n)
};