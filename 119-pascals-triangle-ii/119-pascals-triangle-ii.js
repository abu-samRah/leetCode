/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(num) {
    const numRows = num + 1
    let rows = [[1],[1,1]]
    if(numRows <= rows.length) return rows[num]
    
    const generateRow = (item) =>{
        if(!item) return
        let newItem = [item[0]]
        for(let x=1; x<=item.length -1; x++){
            newItem.push(item[x-1] + item[x])
        }
        newItem.push(item[item.length -1])
        return newItem
    }
    
    let i = 2
    do {
       const item = generateRow(rows[i-1])
       rows.push(item)
        i++
    }while (i<= numRows-1);
    
    return rows[rows.length -1]
};