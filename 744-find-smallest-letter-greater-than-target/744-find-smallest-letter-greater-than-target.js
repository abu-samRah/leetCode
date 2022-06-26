/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
var nextGreatestLetter = function(letters, target) {
    let high = letters.length
    let low = 0
    
    while(low < high){
        const mid = low + Math.floor((high - low)/2)
        if(letters[mid] > target) high = mid
        else low = mid + 1
    }
    
    return letters[high] ?? letters[0]
};