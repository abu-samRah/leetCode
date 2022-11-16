/**
 * @param {number} start
 * @param {number} goal
 * @return {number}
 */
var minBitFlips = function(start, goal) {
    let startXorGoal = start ^ goal
    let C1 = 0
    
    while(startXorGoal>0){
        if((startXorGoal & 1) !== 0) C1++
        startXorGoal >>= 1
    }
    
    return C1
};