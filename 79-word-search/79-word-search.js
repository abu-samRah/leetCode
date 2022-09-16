/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word,visited) {
    const dfs = (i,j,index,visited) =>{
        //console.log({i,j,index})
        if(index === word.length) return true
        
        if(i<0 || j<0 || i>=board.length || j>=board[0].length || board[i][j] !== word[index] || visited[i][j])
            return false
        
        visited[i][j] = true
        
        const left = dfs(i-1,j,index+1,visited)
        const right = dfs(i+1,j,index+1,visited)
        const top = dfs(i,j-1,index+1,visited)
        const bottom = dfs(i,j+1,index+1,visited)
        if(!left && !right && !top && !right) visited[i][j] = false
        return left || top || bottom || right
    }
    
    for(let i =0; i<board.length;i++ ){
        for(let j=0; j<board[0].length; j++){
            if(board[i][j] ===word[0]){
                const visited = [...Array(board.length)].map(e => new Array(board[0].length).fill(0))
                if(dfs(i,j,0,visited))
                    return true
            }
        }
    }
    
    return false
};