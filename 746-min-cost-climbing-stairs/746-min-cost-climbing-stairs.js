/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {
    let x = cost[0] 
    let y = cost[1]
    
    for(let i=2; i<cost.length; i++){
        const tmp = y
        y = cost[i] + Math.min(x , y)
        x = tmp
    }
 
    const res = Math.min(x , y)
    return res
};