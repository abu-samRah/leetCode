/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
    const stack = []
    const answer = new Array(temperatures.length).fill(0)
    
    for(let i =0 ; i < temperatures.length ; i++){
        while(stack.length > 0 && stack[stack.length -1].first < temperatures[i]){
            answer[stack[stack.length -1].second] = i - stack[stack.length -1].second 
            stack.pop()
        }
         stack.push({first : temperatures[i], second: i});
    }
    
    return answer
};



