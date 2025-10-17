// https://leetcode.com/problems/top-k-frequent-elements/description/

export const topKFrequent = (nums, k) => {
	// Create hash map to keep track of each integer and the number of times they appear
	const leaderboard = {};

	// Go through `nums` array
	for (let i = 0; i < nums.length; i++) {
		// Add number to `leaderboard` hash map
		//      As key if it doesn't exist yet
		//      Or increment its value if it does
		const curr = nums[i];
		leaderboard[curr] = (leaderboard[curr] || 0) + 1;
	}

	// Get the entries of the hash map
	//      Returns array of subarrays, index 0 is key and index 1 is value
	//      Ex: {1: 1, 2: 2, 3: 3} => [ [ '3', 3 ], [ '2', 2 ], [ '1', 1 ] ]
	//  Sort the array by the value (index 1)
	//      Moves the most frequent element to the front
	const entries = Object.entries(leaderboard).sort((a, b) => b[1] - a[1]);

	// Return the first k subarrays, mapped to only include index 0 of the subarray (the keys)
	return entries.slice(0, k).map((el) => el[0]);
};

// // Brute force
// export const topKFrequent = (nums, k) => {
// 	const leaderboard = {};
// 	for (let i = 0; i < nums.length; i++) {
// 		const curr = nums[i];
// 		if (curr in leaderboard) {
// 			leaderboard[curr]++;
// 		} else {
// 			leaderboard[curr] = 1;
// 		}
// 	}

// 	const output = [];
// 	while (k > 0) {
// 		let highestVal = 0;
// 		let highestKey = null;
// 		for (const key in leaderboard) {
// 			let val = leaderboard[key];

// 			if (highestVal < val) {
// 				highestVal = val;
// 				highestKey = key;
// 			}
// 		}
// 		output.push(highestKey);
// 		delete leaderboard[highestKey];
// 		k--;
// 	}
// 	return output;
// };
