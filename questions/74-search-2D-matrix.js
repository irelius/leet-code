// https://leetcode.com/problems/search-a-2d-matrix/

// Better solution. O(log (mn)) time complexity
export const search2DMatrix = (matrix, target) => {
	// Store the width and height of the matrix
	const width = matrix[0].length;
	const height = matrix.length;

	// Create left and right pointer
	let l = 0;
	// Because it's a matrix, `r` pointer calculates the last element in the matrix as though it was a flat array
	//      This is done by multiplying width and height, then subtracting 1
	//      ex1: a 3x3 matrix has 9 elements, so the last element's index is 8 (or 9 - 1)
	//      ex2: a 4x4 matrix has 16 elements, so the last element's index is 15 (or 16 - 1)
	let r = height * width - 1;

	while (l <= r) {
		// Calculate `m` pointer for the middle of the matrix
		//      While treating the matrix as if it was a flattened array
		const m = l + Math.floor((r - l) / 2);

		// Get the `x` position of the matrix by dividing `m` by the number of subarrays in the matrix (height)
		//      This translates the "flattened" middle pointer to the correct row of the 2D matrix
		//      ex: for a 3x3 matrix, `m` pointer starts at index 4 (l = 0, r = 8). Element at index 8 belongs to row 2, which is calculated by `Math.floor(4/3)`
		const x = Math.floor(m / width);

		// Get the `y` position of the matrix by getting the modulo of of middle pointer and the number of elements in any subarray (width)
		//      `x` calculates how many rows fit before hitting the middle pointer
		//      `y` calculates how many elements in the correct row is before the middle pointer
		//      ex: for a 3x3 matrix, `m` pointer is 4, so...
		//          `x` is `Math.floor(4/3)`, which equals 1
		//          `y` is `4 % 3`, which equals 1
		//          middle of the 2D array when l=0 and r=8 is [1, 1]
		const y = m % width;

		// Get the current value using x and y coordinates
		const currVal = matrix[x][y];

        // From here, apply the fundamental binary search logic
		if (currVal < target) {
            // Adjust `l` to be `m+1` if the `currVal` is too small
			l = m + 1;
		} else if (currVal > target) {
            // Adjust `r` to be `m-1` if the `currVal` is too big
			r = m - 1;
		} else {
			return true;
		}
	}

	return false;
};

// // Good solution, but not optimal. O(m + log n) time complexity
// export const search2DMatrix = (matrix, target) => {
//     // Set a `subarray` variable to identify which subarray to do binary search on
// 	let subarray = null;
//     // Loop through `matrix`
// 	for (let i = 0; i < matrix.length; i++) {
// 		const curr = matrix[i];
//         // If the first element of the current subarray is <= target, and the last element is >= target
//         // Then the current subarray should include the target
// 		if (curr[0] <= target && target <= curr[curr.length - 1]) {
//             // Set `subarray` to the current subarray
// 			subarray = curr;
//             // Break out of the loop as we don't need to check anymore
// 			break;
// 		}
// 	}

//     // If `subarray` is `null`, then the target was out-of-bounds for all subarrays, return false
// 	if (subarray === null) return false;

//     // Set left and right pointers
//     let l = 0
//     let r = subarray.length - 1

//     // Binary search the subarray to find the target
//     while(l <= r) {
//         const m = l + Math.floor((r - l) / 2)
//         const val = subarray[m]

//         if(val < target) {
//             l = m + 1
//         } else if (val > target) {
//             r = m - 1
//         } else {
//             // Either return `true` when target is found
//             return true
//         }
//     }

//     // Target is not in the subarray, return false
//     return false
// };
