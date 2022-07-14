/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */

const VISITED = 2, VISITING = 1, UNVISITED = 0;

var canFinish = function(numCourses, prerequisites) {
    const connections = prepareInput(numCourses,prerequisites);
    return solution(connections)
    
    
};

const prepareInput = (numCourses, prerequisites) => {
  const connections =  [...Array(numCourses)].map(e => Array(0));
  for (let i = 0; i < prerequisites.length; i++) {
      connections[prerequisites[i][1]].push(prerequisites[i][0]);
  }
  return connections;
};

function solution(connections) {
    const visitedList = new Array(connections.length).fill(UNVISITED)
    
    for(let index=0; index<connections.length; index++){
        if(visitedList[index] === UNVISITED) 
            if(!dfs(index,connections,visitedList)) 
                return false
    }

    return true
}

const dfs = (index,connections,visitedList) =>{
    visitedList[index] = VISITING
    for(let neighbor of connections[index]){
        if(visitedList[neighbor] === VISITING) return false
        if(visitedList[neighbor] === UNVISITED)
            if(!dfs(neighbor,connections,visitedList)) 
                return false
    }
    visitedList[index] = VISITED
    return true
}