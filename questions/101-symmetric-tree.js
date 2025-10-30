// https://leetcode.com/problems/symmetric-tree/description/?envType=problem-list-v2&envId=tree
export const symmetricTree = (root) => {
	// create recursion function
	//      takes in `leftNode` and `rightNode`
	const recurse = (leftNode, rightNode) => {
		// if both left and right nodes are `null`, then recursion has exhausted this particular path of the tree
		//      no invalid instances has occurred, return `true`
		if (!leftNode && !rightNode) return true;

		// If the left and right nodes are valid AND they have the same value
		if (leftNode && rightNode && leftNode.val === rightNode.val) {
			// Invoke recursion
			//      Pass in the left of `leftNode` with the right of `rightNode`
			//      Or the right of `leftNode` with the left of `rightNode`
			//      This maintains checking nodes that match symmetrically
			// Return the `&&`, so if one of the paths returns `false`, then one or both paths are non-matching
			return recurse(leftNode.left, rightNode.right) && recurse(leftNode.right, rightNode.left);
		}

		// Return `false` at the end
		//      Because either the left node or right node is `null` (but not both)
		//      Or because they don't match values
		return false;
	};

	// Return the final value of the recursion
	return recurse(root.left, root.right);
};
