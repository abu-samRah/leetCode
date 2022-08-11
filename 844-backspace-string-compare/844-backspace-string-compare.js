/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function(s, t) {
    let stack = []
    
    for(let c of s) c === '#' ? stack.pop() : stack.push(c)
    
    const finalS = stack.join("")
    
    stack = []
    
    for(let c of t) c === '#' ? stack.pop() : stack.push(c)
    
    const finalT = stack.join("")
   
    return finalS === finalT
};