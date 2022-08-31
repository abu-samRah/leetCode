/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    const squares = new Array(nums.length)
    let top = nums.length -1
    
    let j = top
    let i=0
    while(i<=j){
        const left = Math.pow(nums[i],2)
        const right = Math.pow(nums[j],2)
        if(left>=right){
            squares[top] = left
            i++
        }else{
            squares[top] = right
            j--
        }
        top--
    }
    
    return squares
};