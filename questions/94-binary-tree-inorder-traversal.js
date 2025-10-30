// https://leetcode.com/problems/binary-tree-inorder-traversal/description/?envType=problem-list-v2&envId=tree

// Iterative solution
export const binaryTreeInorderTraversal = (root) => {
	let output = [];
	let stack = [];

	while (root || stack.length > 0) {
		while (root) {
			stack.push(root);
			root = root.left;
		}

		root = stack.pop();
		output.push(root.val);

		root = root.right;
	}

	return output;
};

// // Recursive solution
// export const binaryTreeInorderTraversal = (root) => {
// 	const output = [];

// 	const recurse = (node) => {
// 		if (!node) return;

// 		recurse(node.left);
// 		output.push(node.val);
// 		recurse(node.right);
// 	};

// 	recurse(root);

// 	return output;
// };
