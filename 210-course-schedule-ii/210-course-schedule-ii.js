/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function(numCourses, prerequisites) {
    const connections = prepareInput(numCourses,prerequisites);
    const ordering = new Array(numCourses).fill(0)
    let counter = {len:numCourses-1}
    return solution(connections,ordering,counter)
   
};

const prepareInput = (numCourses, prerequisites) => {
  const connections =  [...Array(numCourses)].map(e => Array(0));
  for (let i = 0; i < prerequisites.length; i++) {
      connections[prerequisites[i][1]].push(prerequisites[i][0]);
  }
  return connections;
};

const VISITED = 2, VISITING = 1, UNVISITED = 0;

function solution(connections,ordering,counter) {
    const visitedList = new Array(connections.length).fill(UNVISITED)
    
    for(let index=0; index<connections.length; index++){
        if(visitedList[index] === UNVISITED) 
            if(!dfs(index,connections,visitedList,ordering,counter))
                return []
    }

    return ordering
}

const dfs = (index,connections,visitedList,ordering,counter) =>{
    
    visitedList[index] = VISITING
    for(let neighbor of connections[index]){
        if(visitedList[neighbor] === VISITING) return false
        if(visitedList[neighbor] === UNVISITED)
            if(!dfs(neighbor,connections,visitedList,ordering,counter)) 
                return false
    }

    visitedList[index] = VISITED
    ordering[counter.len] = index
    counter.len = counter.len -1
    return true
}