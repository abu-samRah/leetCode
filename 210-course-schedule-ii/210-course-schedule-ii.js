/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function(numCourses, prerequisites) {
        const [connections,inDegree] = prepareInput(numCourses,prerequisites);
    const sources = [];
    const ans = []
    
    for (let i = 0; i < inDegree.length; i++) {
        if (inDegree[i] === 0) {
          sources.push(i);
        }
    }
    
    while(sources.length){
        const front = sources.shift()
        ans.push(front)
        
        const curr = connections[front]
        for(let i=0; i<curr.length; i++){
            inDegree[curr[i]]--
            if(inDegree[curr[i]] === 0) sources.push(curr[i])
        }
    }
    
    if(ans.length !== numCourses) return []
    return ans
    
};

const prepareInput = (numCourses, prerequisites) => {
  const connections =  [...Array(numCourses)].map(e => Array(0));
    const inDegree = new Array(numCourses).fill(0)
  for (let i = 0; i < prerequisites.length; i++) {
      connections[prerequisites[i][1]].push(prerequisites[i][0]);
      inDegree[prerequisites[i][0]]++
  }
  return [connections,inDegree];
};