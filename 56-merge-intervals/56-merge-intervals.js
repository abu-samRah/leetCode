/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    if(!intervals.length) return [];
    intervals.sort((a, b) => a[0] - b[0]);
    const result = [intervals[0]]
    for(let i=1; i<intervals.length;i++){
      const [prevStart, prevEnd] = result[result.length - 1]
      const [currStart, currEnd] = intervals[i]
      if(currStart>=prevStart && currStart<=prevEnd){
        result.pop()
        result.push([Math.min(prevStart,currStart),Math.max(prevEnd,currEnd)])
      }else{
        result.push([currStart, currEnd])
      }
    }
    return result;
};