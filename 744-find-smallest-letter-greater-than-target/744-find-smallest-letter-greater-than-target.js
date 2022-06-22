/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
var nextGreatestLetter = function(letters, target) {
    if(letters[0] > target || letters[letters.length -1] <= target) return letters[0]
    
    const binarySearch = (start,end) =>{
        while(start<=end) {
        const mid = Math.floor((start+end)/2)
        if(letters[mid] > target && letters[mid - 1] <= target) return letters[mid]
        else if(letters[mid] > target) end = mid -1 
        else start = mid + 1
        } 
        
    }
    
    const letter = binarySearch(0,letters.length -1)
    return letter
};