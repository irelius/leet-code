// https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/description/?envType=problem-list-v2&envId=tree
export const convertSortedArrayToBinaryTree = (nums) => {
	// `nums` is a sorted array
	//      to create a balanced tree, select the middle of the `nums` array to split the total number of nodes on each side of the tree equally
	//      for each half, continue selecting the middle to continue splitting the remainder numbers to equalize the number of nodes
	//          which is a binary search principle

	// create recursion function that takes in left and right pointer
	const recurse = (l, r) => {
		// if left pointer is greater than right pointer
		//      either the left pointer reached the last element in the `nums` array
		//      or the right pointer reached the first element in the `nums` array
		if (l > r) return null;

		// Calculate the middle pointer
		const m = l + Math.floor((r - l) / 2);

		// create a new tree node with the value being the middle of the current iteration's `nums` array range
		const node = new TreeNode(nums[m]);

		// recurse with the left half of the `nums` array range, moving the right pointer to shrink the range
        //      set the left node with the result
		node.left = recurse(l, m - 1);
		// recurse with the right half of the `nums` array range, moving the left pointer to shrink the range
        //      set the right node with the result
		node.right = recurse(m + 1, r);

        // return `node`
		return node;
	};

	// return the recursive call with the left and right pointer being the entire size of the `nums` array
	return recurse(0, nums.length - 1);
};
