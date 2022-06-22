/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function(arr1, arr2) {
    const arr1Map = {}
   
    const res = []
    const leftOvers = []
    const arr2Map = new Map();
    
    for (let i =0; i<arr2.length; i++) arr2Map.set(arr2[i], i);
                                       
    
    for (let i =0; i<arr1.length; i++){
         arr1Map[arr1[i]] = arr1Map[arr1[i]]  = (arr1Map[arr1[i]] || 0) + 1
         if(!arr2Map.has(arr1[i])) leftOvers.push(arr1[i])
    }
    
    
    for(const [key, value] of arr2Map.entries()){
            let freq = arr1Map[key]
            while(freq){
                res.push(key)
                freq--
            }
    }
    return [...res, ...leftOvers.sort((a,b) => a-b) ]
    
};