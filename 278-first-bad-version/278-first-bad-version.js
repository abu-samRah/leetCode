/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */


var solution = function(isBadVersion) {
    return function(n) {
       let low = 1, high = n;
       while(low < high){
           const mid = low + Math.floor((high-low)/2);
           if(isBadVersion(mid)) high = mid
           else low = mid + 1
       }
       return high;
    };
};