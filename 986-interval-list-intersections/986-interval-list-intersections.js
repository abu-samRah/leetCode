/**
 * @param {number[][]} firstList
 * @param {number[][]} secondList
 * @return {number[][]}
 
 [[0,2],[5,10],[13,23],[24,25]] [[1,5],[8,12],[15,24],[25,26]]
 
 [0,2]  [1,5]
 s1 e1  s2 e2
 s1>=s2 && s1<=e2  || s2>=s1 && s2<=e1
 
 0>=1 && 0<=5  ||  1>=0 && 1<=2   res = [[1,2]]
 
 e1<e2 i++ 
 j++ 
 */
var intervalIntersection = function(firstList, secondList) {
    let res = []
    let i =0 
    let j =0

    while(i<firstList.length && j<secondList.length){
        const [s1,e1] = firstList[i]
        const [s2,e2] = secondList[j]
        
        if(s1>=s2 && s1<=e2  || s2>=s1 && s2<=e1){
            res.push([Math.max(s1,s2),Math.min(e1,e2)])
        }
        
        if(e1<e2) i++ 
        else j++ 
    }
    
    return res
};