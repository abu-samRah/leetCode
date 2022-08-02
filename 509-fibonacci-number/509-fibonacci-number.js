/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
    const memo = {}
    if(n<=0) return 0
    const helper = (n) =>{
        if(memo[n]) return memo[n]
        if(n === 1 || n === 2) return 1
        memo[n] = helper(n-1) + helper(n-2)
        return memo[n]
    }
    return helper(n)
};