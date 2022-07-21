/**
 * @param {string[][]} accounts
 * @return {string[][]}
 */

var accountsMerge = function(accounts) {  
    
    let graph = {};
    let nameDict = {};
    
    for (let account of accounts) {
        let name = account[0];
        
        for (let i=1;i<account.length;i++) {
            if (!graph[account[i]]) graph[account[i]] = new Set();
            nameDict[account[i]] = name;
            if (i != 1) {
                graph[account[1]].add(account[i]);
                graph[account[i]].add(account[1]);
            }
        }
    }
   // console.log(graph,nameDict)
    let res = [];
    let visited = new Set();
    
    let dfs = function (key) {
        visited.add(key);
        let emails = [key];
        graph[key].forEach((e)=>{
            if (!visited.has(e)) {
                emails.push(...dfs(e));
            }
        })
            
        return emails;
    }
    
    for (let key in graph) {
        if (!visited.has(key)) {
            let temp = dfs(key);
            temp.sort();
            temp.unshift(nameDict[temp[0]]);
            res.push(temp);
        }
    }
    
    return res;
};