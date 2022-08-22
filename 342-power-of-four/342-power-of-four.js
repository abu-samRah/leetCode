/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfFour = function(n) {
    const res = Math.log(n) / Math.log(4)
    return n? res === Math.ceil(res) : false
};