/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
    const stack = []
    const splittedPaths = path.split('/')
   
    for(let x of splittedPaths){
        if(x === '.' || x === '') continue
        x === '..' ? stack.pop() :stack.push(x)
    }
    
    return  '/' + stack.join('/')
};