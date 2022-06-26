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
        let high = n
        let low = 1
        while(low < high){
            const mid = low +  Math.floor((high-low)/2)
            const guessedRes = guess(mid)
            if(guessedRes <= 0) high = mid
            else low = mid + 1
        }
        
        return high
};