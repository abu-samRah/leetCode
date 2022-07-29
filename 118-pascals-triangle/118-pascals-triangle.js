/**
 * @param {number} rowIndex
 * @return {number[]}
 */

/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    let rows = [[1],[1,1]]
    if(numRows <= rows.length) return rows.slice(0,numRows)
    
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
    
    return rows
};