/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {
    const dp = [cost[0], cost[1]]
    
    for(let i=2; i<cost.length; i++){
        dp[i] = cost[i] + Math.min(dp[i-1] , dp[i-2])
    }
    const len = dp.length
    const res = Math.min(dp[len-1] , dp[len-2])
    return res
};