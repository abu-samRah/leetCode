/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    const stack = []
    const operators = {
      "+": (a, b) => a + b,
      "-": (a, b) => a - b,
      "*": (a, b) => a * b,
      "/": (a, b) => a / b >= 0 ? Math.floor(a / b) : Math.ceil(a / b),
    };
    
    for(let i=0;i<tokens.length;i++){
        const token = tokens[i]
        if(operators[token]){
            const first  = stack.pop()
            const second = stack.pop()
            const fun = operators[token]
            const res = fun(second,first)
            stack.push(res)
        }
        else
            stack.push(+token)
        
      
    }
  
    return stack[0]
};