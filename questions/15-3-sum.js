// https://leetcode.com/problems/3sum/description/
export const threeSum = (nums) => {
	// sort the `nums` array from least to greatest
	nums.sort((a, b) => a - b);

	// Array to hold the unique combinations of 3 numbers that add to 0
	const ans = [];

	// Loop through nums array
	for (let i = 0; i < nums.length; i++) {
		// Set `curr` to the current number
		const curr = nums[i];

		// If `curr` is greater than 0, quit the loop
		//      Because the array is sorted from least to greatest, once `curr` hits 0, you can't add to 0 with the numbers past `i`
		//      All numbers past index `i` will be positive
		if (curr > 0) break;

		// If `num[i] === num[i - 1]`, just continue
		//      Since the array is sorted, any number that is the same as the previous don't need to be checked
		//      Because the permutations would've have been checked for already the first time
		if (i > 0 && nums[i] === nums[i - 1]) {
			continue;
		}

		// Set a left index to be `i + 1` to avoid using the same number set by the for loop
		let l = i + 1;
		// Set a right index to be the last element in the `nums` array
		let r = nums.length - 1;

		// While `l` pointer is less than `r` pointer
		while (l < r) {
			// Get the sum of the current number and the left and right pointer numbers
			const sum = curr + nums[l] + nums[r];

			// If the current sum is less than 0, then move the left pointer right
			//      Because nums array is sorted from least to greatest, the only way to get sum higher is to move the lower bound number up
			if (sum < 0) {
				l++;
			}
			// If the sum is greater than 0, move the right pointer left
			//      Because nums array is sorted from least to greatest, only way to get sum lower is to move the upper bound number down
			else if (sum > 0) {
				r--;
			}
			// Otherwise, sum is 0
			else {
				// Push to `ans` array an array of `curr, nums[l], num[r]`
				//      Order is not an issue because array was already sorted
				ans.push([curr, nums[l], nums[r]]);

				// Move left over to the right
				l++;

				// While left pointer is less than right pointer and the new number at left pointer is the same as what is was previously, move the left pointer over 1 again
				//      Keep repeating until the left pointer is looking a unique number
                //      This is to avoid repeating steps with the same number
				while (l < r && nums[l] === nums[l - 1]) l++;
			}
		}
	}

	return ans;
};

// // Brute force solution
// export const threeSum = (nums) => {
// 	const ans = [];
// 	const triplets = new Set();

// 	for (let i = 0; i < nums.length; i++) {
// 		for (let j = i + 1; j < nums.length; j++) {
// 			for (let k = j + 1; k < nums.length; k++) {
// 				const num1 = nums[i];
// 				const num2 = nums[j];
// 				const num3 = nums[k];

// 				if (num1 + num2 + num3 === 0) {
// 					const sort = [num1, num2, num3].sort((a, b) => a - b);
// 					const joined = sort.join(",");

// 					if (!triplets.has(joined)) {
// 						ans.push(sort);
// 						triplets.add(joined);
// 					}
// 				}
// 			}
// 		}
// 	}

// 	return ans;
// };

console.log(threeSum([-1, 0, 1, 2, -1, -4])); // [ -4, -1, -1, 0, 1, 2 ]
