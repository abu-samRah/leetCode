/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function(piles, h) {
    let left = 1
    let right = Math.max(...piles)
    let res = right
    
    while(left<=right){
        const k = Math.floor((left + right)/2)
        let hours = 0
        for(let i=0; i<piles.length; i++) hours += Math.ceil(piles[i]/k)
        
        if(hours<=h){
            res = Math.min(res,k)
            right = k-1
        } 
        else left = k + 1
    }
    return res
};