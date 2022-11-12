/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function(heights) {
    let maxArea = 0
    let stack = []
    
    for(let i = 0; i<heights.length; i++){
        let start = i
        while(stack.length && stack[stack.length-1].height > heights[i]){
            const {index,height} = stack.pop()
            maxArea = Math.max(maxArea, height * (i-index))
            start = index
        }
        stack.push({index:start ,height: heights[i]})
    }
    
    
    for(let i = 0; i<stack.length; i++){
        const {index,height}= stack[i]
        maxArea = Math.max(maxArea, height * (heights.length-index))
    }
    
    return maxArea
};

