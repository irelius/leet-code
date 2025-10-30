// https://leetcode.com/problems/same-tree/?envType=problem-list-v2&envId=tree
export const sameTree = (p, q) => {
	// create recursion function, takes in `i` and `j` parameters (the current two tree nodes)
	function recurse(i, j) {
		// If both `i` and `j` are `null`, then the recursion would have exhausted this particular path of the tree
		//      No invalid instances has occurred, return `true`
		if (!i && !j) return true;

		// If `i` and `j` are both valid nodes AND they have the same value
		if (i && j && i.val === j.val) {
			// Invoke recursion of both left and right of the current `i` and `j` nodes
			//      Return the `&&`, so if one of the paths returns a `false`, then one or both of the paths include non-matching values
			//      Ex: [1, 2, 3] and [1, 2] would return true for the left node, but false for the right
			return recurse(i.left, j.left) && recurse(i.right, j.right);
		}

		// Return false at then end
		//      Because `i` or `j` are `null` values (but not both)
		//      Or because the values of the nodes don't match
		return false;
	}

	// Return the final value of the recursion call
	return recurse(p, q);
};
