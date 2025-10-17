// https://leetcode.com/problems/group-anagrams/
export const groupAnagrams = (strs) => {
	// Create a hash map to group strings by length
	let ans = {};

    // Loop through each element of strs array
	for (let i = 0; i < strs.length; i++) {
        const curr = strs[i]

        // Split and alphabetize the current string
		let sorted = curr.split("").sort().join("");

        // If the alphabetized string exists as a key in the `ans` hash map
		if (sorted in ans) {
            // Add the current string (not alphabetized) to the array of that sorted string key
			ans[sorted].push(curr);
		}
        // If the alphabetized string is a new permutation
        else {
            // Create a new key of that string with a value of an array
            //      Add the current string as the first element of that array
			ans[sorted] = [curr];
		}
	}

    // Return the values of the `ans` hash map
    //      Works because order doesn't matter
	return Object.values(ans);

	// // More complicated way of `return Object.values(bySort)`:
	// const grouped = []
	// for (const key in bySort) {
	//     grouped.push(bySort[key])
	// }
	// return grouped
};

// // Brute force solution
// export const groupAnagrams = (strs) => {
// 	const grouped = [];
// 	for (let i = 0; i < strs.length; i++) {
// 		const currI = strs[i];
// 		const currISorted = currI.split("").sort().join("");

// 		const subgroup = [currI];

// 		for (let j = i + 1; j < strs.length; j++) {
// 			const currJ = strs[j];
// 			const currJSorted = currJ.split("").sort().join("");
// 			if (currISorted === currJSorted) {
// 				subgroup.push(currJ);
// 				strs.splice(j, 1);
// 				j--;
// 			}
// 		}

// 		grouped.push(subgroup);
// 	}

// 	return grouped;
// };
