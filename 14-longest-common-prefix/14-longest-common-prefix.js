/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let longest = strs[0]
    for(let i=1; i<strs.length; i++){
        for(let s = 0;s < longest.length; s++){
            if( longest[s] !== strs[i][s]){
                longest = longest.substring(0,s)
                break
            }
        }
    }
    return longest
};