// https://leetcode.com/problems/permutations/description/
// Does not provide unique permutations (includes duplicates)
//      But question provides only unique numbers
export const permutations = (nums) => {
	let res = [];

	const recursion = (i) => {
		if (i === nums.length) {
			// add arrangement of nums to `res` set
			res.push([...nums]);
			return;
		}

		// go through each letter
		//      Looks like DFS inorder traversal
		for (let j = i; j < nums.length; j++) {
			[nums[i], nums[j]] = [nums[j], nums[i]];

			// recurse while incrementing `i`
			recursion(i + 1);

			// swap again
			[nums[i], nums[j]] = [nums[j], nums[i]];
		}
	};

	recursion(0);

	return res;
};
