/**
 * @param {number[]} arr
 * @param {number} start
 * @return {boolean}
 */
var canReach = function(arr, start) {
    const visited = new Map()
    const queue = [start]
    while(queue.length){
        const index = queue.shift()
        if(!visited.has(index)){
            if(index < 0 || index > arr.length -1 ) continue
            if(arr[index] === 0 ) return true
            visited.set(index, true)
            queue.push(index-arr[index])
            queue.push(index+arr[index])
        }
        
    }
    return false 
};