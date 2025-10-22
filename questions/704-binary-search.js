// https://leetcode.com/problems/binary-search/
export const binarySearch = (nums, target) => {
	// set two pointers, at the beginning and end of the array
	let l = 0;
	let r = nums.length - 1;

	// While the left pointer is <= right pointer
	//      `<=` is required in case l and r pointers land on the same index and that index is the target value
	//      If the target does not exist in the array, then the logic below will eventually make left pointer be greater than right pointer
	while (l <= r) {
		// Calculate the middle point with this formula
		//      Math.floor((l + r) / 2) could technically work, but breaks with large integers
		const m = l + Math.floor((r - l) / 2);
		const val = nums[m];

		// If val is less than target, then the window needs to shrink to the right
		if (val < target) {
			// Set new left pointer to `m + 1`
			//      Setting it to just `m` risks infinite loop
			//      Also allows for left pointer to eventually be greater than right pointer if target is not in array
			l = m + 1;
		}
		// If val is greater than target, then window needs to shrink to the left
		else if (val > target) {
			// Set new left pointer to `m - 1`
			//      Setting it to just `m` risks infinite loop
			//      Also allows for left pointer to eventually be greater than right pointer if target is not in array
			r = m - 1;
		} else {
			return m;
		}
	}

	// If while loop exits, then element does not exist in the array
	//      And left pointer eventually got set to be higher than right pointer
	return -1;
};

console.log(binarySearch([-1, 0, 3, 5, 9, 12], 9));
