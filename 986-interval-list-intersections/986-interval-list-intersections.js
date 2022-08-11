/**
 * @param {number[][]} firstList
 * @param {number[][]} secondList
 * @return {number[][]}
 */
var intervalIntersection = function(firstList, secondList) {
    let i =0
    let j = 0
    const res = []
    
    while(i< firstList.length && j< secondList.length){
        const a_overlap = firstList[i][0] >= secondList[j][0] && firstList[i][0]  <= secondList[j][1]
        const b_overlap = secondList[j][0] >= firstList[i][0] && secondList[j][0] <= firstList[i][1]
        
        if(a_overlap || b_overlap){
            res.push([Math.max(firstList[i][0], secondList[j][0]) , Math.min(firstList[i][1],secondList[j][1])])
        }
        
        if(firstList[i][1] < secondList[j][1]){
            i++
        }else{
            j++
        }
    }
    return res
};