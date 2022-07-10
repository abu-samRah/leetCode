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
    let employeeMap = new Map();
    for (employee of employees) {
        employeeMap.set(employee.id, {importance : employee.importance, sub : employee.subordinates})
    }
    
    let totalImportance = 0;
    let queue = [id];
    
    while(queue.length > 0) {
        let currentEmployee = employeeMap.get(queue.shift());
        totalImportance += currentEmployee.importance;
        queue.push(...currentEmployee.sub)
    }
    
    return totalImportance
};