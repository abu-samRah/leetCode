var firstUniqChar = function(s) {
    const count = new Map();
    for(let i = 0; i < s.length; i++) {
        if(!count[s[i]]) {
            count[s[i]] = 1;
        } else {
            count[s[i]]++
        }
    }
    for(let i = 0; i < s.length; i++) {
        if(count[s[i]] === 1) return i
    }    
    return -1
};