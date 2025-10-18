// https://leetcode.com/problems/longest-consecutive-sequence/

export const longestConsecutiveSequence = (nums) => {
	// Edge case where nums is empty, then longest sequence is 0
	if (nums.length === 0) return 0;

	// Create new set of nums, eliminate duplicates
	const numSet = new Set(nums);

	// Set max to 1 to keep track of longest sequence
	//      Defaults to 1 since all arrays must have at least 1 element due to edge case handling
	let max = 1;

	// Loop through each element of the numSet set
	for (const num of numSet) {
		// If `numSet` doesn't have the previous value of the current num, then it is it the start of the sequence
		//      There is no immediate smaller value
		if (!numSet.has(num - 1)) {
			// Set `currVal` to the current num
			let currVal = num;

			// Set a temporary max to keep track of the current sequence's length
			//      Resets to 1
			let tempMax = 1;

			// While the current number's next immediate value exists in `numSet`, increment `currVal` and `tempMax`
			while (numSet.has(currVal + 1)) {
				currVal++;
				tempMax++;
			}

			// Update total max to be the greater of `max` and `tempMax`
			max = Math.max(max, tempMax);
		}
	}

	return max;
};
