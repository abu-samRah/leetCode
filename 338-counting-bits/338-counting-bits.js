/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function(n) {
    const ans = [0]
    let offset = 1
    
    for(let i=1; i<=n; i++){
        offset = offset*2 === i ? i : offset
        ans[i] = 1 + ans[i-offset]
    }
    
    return ans
};