var findLexSmallestString = function(s, a, b) {
    const set=new Set();
    let result=s;
    dfs(s,a,b)
    return result;
    
    function add(s){
        let res=''
        for(let i=0;i<s.length;i++){
            if(i%2){
                res+=((+s[i]+a)%10).toString()
            }else{
                res+=s[i]
            }
        }
        return res
    }
    
    function rotate(s){
        let res=""
        res += s.substring(s.length-b) + s.substring(0,s.length-b);
        return res;
    }
    
    function dfs(str,a,b){
        if(set.has(str)) return;
        set.add(str);
        if(result>str){
            result=str
        }
        dfs(add(str),a,b)
        dfs(rotate(str),a,b)
    }
};