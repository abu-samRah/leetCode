/**
 * @param {number[][]} edges
 * @return {number[]}
 */
var findRedundantConnection = function(edges) {
    const par =[...Array(edges.length+1).keys()]
    const rank = new Array(edges.length+1).fill(1)
    
    const find = (n) =>{
        let p = par[n]
        while(p !== par[p]){
            par[p] = par[par[p]]
            p = par[p]
        }
        return p
    }
    
    const union = (n1,n2)=>{
        const p1 = find((n1))
        const p2 = find((n2))
        
        if (p1 === p2) return false
        
        if(rank[p1] > rank[p2]){
            par[p2] = p1
            rank[p1] += rank[p2]
        }else{
            par[p1] = p2
            rank[p2] += rank[p1]
        }
        
        return true
    }
    
    for(let i =0; i<edges.length; i++)
        if(!union(edges[i][0],edges[i][1]))
            return [edges[i][0],edges[i][1]]
}