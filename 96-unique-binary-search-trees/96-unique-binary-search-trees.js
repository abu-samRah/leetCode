/**
 * @param {number} n
 * @return {number}
 */

function numTrees(n) {
  return count_trees_rec({}, n);
}



function count_trees_rec(map, n) {
  if (n in map) {
    return map[n];
  }

  if (n <= 1) {
    return 1;
  }
  let count = 0;
  for (let i = 1; i < n + 1; i++) {
    // making 'i' the root of the tree
    const countOfLeftSubtrees = count_trees_rec(map, i - 1);
    const countOfRightSubtrees = count_trees_rec(map, n - i);
    count += (countOfLeftSubtrees * countOfRightSubtrees);
  }

  map[n] = count;
  return count;
}
