// https://leetcode.com/problems/find-the-duplicate-number/description/
// Question asks for O(1) space complexity and without modifying `nums`
export const findDuplicateNumber = (nums) => {
	// loop through each element of the `nums` array
	for (let i = 0; i < nums.length; i++) {
		// every element can be used to calculate an index of the `nums` array
		//      if the current number appears multiple times, then they will refer to the same index every time (given that`i` is used in the formula)
		//      `Math.abs` is used so that calculations can be performed on an element that happens to be already negative (a duplicate was already found)
		const index = Math.abs(nums[i]) - 1;

		// if the element at the index calculated is negative, then that means a duplicate was already found
		//      return the positive value of this current element
		if (nums[index] < 0) return Math.abs(nums[i]);

		// otherwise, change the element at the calculated index to be negative
		nums[index] *= -1;
	}
};

// // Solve using a set. Goes against rule for O(1) space complexity
// export const findDuplicateNumber = (nums) => {
// 	const dupes = new Set();
// 	for (let i = 0; i < nums.length; i++) {
// 		if (dupes.has(nums[i])) return nums[i];
// 		else dupes.add(nums[i]);
// 	}
// };
