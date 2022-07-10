/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
var canVisitAllRooms = function(rooms) {
    const map = new Map()
    const queue = []
    queue.push(rooms[0])
    map.set(0,true)
    while(queue.length){
        
        const nodes = queue.shift()
        for(let i=0; i<nodes.length; i++){
            if(!map.get(nodes[i])){
                map.set(nodes[i], true)
                queue.push(rooms[nodes[i]])
            }
        }
    }

    return map.size === rooms.length 
};