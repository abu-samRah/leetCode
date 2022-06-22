/** 
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
var guessNumber = function(n) {
    const binarySearch = (start,end) =>{
        while(start<=end){
            const mid = Math.floor((start+end)/2)
            const guessedRes = guess(mid)
            if(guessedRes === 0) return mid
            else if(guessedRes === -1) end = mid -1
            else start = mid + 1
        }
        
        
    }
   return binarySearch(0,n)
};