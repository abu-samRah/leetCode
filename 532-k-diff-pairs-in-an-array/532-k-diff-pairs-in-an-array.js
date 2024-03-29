/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findPairs = function(a, k) {
	if(a.length === 0 || k < 0) return 0
	let myMap = new Map(),
		count = 0
	//Get wordcount
	for(num of a){
		myMap.set(num,(myMap.get(num)+1) || 1)
	}
	//search solutions
	myMap.forEach((value,key) =>{
		if(k === 0){
			if(value > 1) count++
		}
		else{
			if(myMap.has(key-k)) count++
		}
	})

	return count
};