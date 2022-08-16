const findClosestElements = function (arr, k, x) {
	const heap = new MinPriorityQueue({
		compare: (a, b) => {
			const diffA = Math.abs(a - x);
			const diffB = Math.abs(b - x);
			if (diffA == diffB) return a > b;
			else return diffA > diffB;
		},
	});

	for (let i = 0; i < arr.length; i++) heap.enqueue(arr[i]);
	const res = [];
	for (let i = 0; i < k; i++) res.push(heap.dequeue());
    
	return res.sort((a, b) => a - b);
};