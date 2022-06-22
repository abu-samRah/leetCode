/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function(arr1, arr2) {
    const arr1Map = {}
    const arr2Map = {}
    const res = []
    const leftOvers = []
    
    for (let i =0; i<arr2.length; i++) arr2Map[arr2[i]]  =  i
    for (let i =0; i<arr1.length; i++){
         arr1Map[arr1[i]] = arr1Map[arr1[i]]  = (arr1Map[arr1[i]] || 0) + 1
         if(isNaN(arr2Map[arr1[i]])) leftOvers.push(arr1[i])
    }
    const map2Keys = Object.entries(arr2Map).sort((a,b) => a[1] - b[1])
    
    for(let i =0; i<map2Keys.length; i++){
            let freq = arr1Map[map2Keys[i][0]]
            while(freq){
                res.push(map2Keys[i][0])
                freq--
            }
    }
    return [...res, ...leftOvers.sort((a,b) => a-b) ]
    
};