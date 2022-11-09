/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    const sLength = s.length
    const tLength = t.length
    
    if(sLength !== tLength) return false
    
    const myMap = {}
    
    for(let i=0; i<sLength; i++)
        myMap[s[i]] = (myMap[s[i]] || 0) + 1

    
    for(let i=0; i<tLength; i++)
        if(!myMap[t[i]]--) return false
        
    return true
};