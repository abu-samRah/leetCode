/**
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function(n) {
    let ans = 0
    let start = 1
    while(n>=0){
        n-=start
        ans++
        start++
    }
    
    return ans-1
};