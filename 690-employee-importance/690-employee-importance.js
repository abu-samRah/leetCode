/**
 * Definition for Employee.
 * function Employee(id, importance, subordinates) {
 *     this.id = id;
 *     this.importance = importance;
 *     this.subordinates = subordinates;
 * }
 */

/**
 * @param {Employee[]} employees
 * @param {number} id
 * @return {number}
 */
var GetImportance = function(employees, id) {
    const root = employees.find(employee => employee.id === id)
    const queue = []
    queue.push(root)
    const visited = {[id]:true}
    let total = 0
    while(queue.length){
        const current = queue.shift()
        total += current.importance
        for(let i=0; i<current.subordinates.length; i++){
            if(!visited[current.subordinates[i]]){
                visited[current.subordinates[i]] = true
                queue.push(employees.find(employee => employee.id === current.subordinates[i]))
            }
        }
    }
    
    return total
    
};