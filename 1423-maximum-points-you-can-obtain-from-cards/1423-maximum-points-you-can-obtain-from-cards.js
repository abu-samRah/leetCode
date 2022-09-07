/**
 * @param {number[]} cardPoints
 * @param {number} k
 * @return {number}
 */
var maxScore = function(cardPoints, k) {
    let start =0
    let end = cardPoints.length - k 

    let total = 0
    for(let i =end; i<cardPoints.length; i++)
        total+=cardPoints[i]
   let res = total
    while(end<cardPoints.length){
        total += cardPoints[start] - cardPoints[end]
        res = Math.max(total,res)
        start++
        end++
    }
    
    return res
};