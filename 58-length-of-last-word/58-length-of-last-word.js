/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    const str = s.trimEnd()
    const startOfLastWorld = str.lastIndexOf(' ')
    return str.length-startOfLastWorld -1
};