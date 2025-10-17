// https://leetcode.com/problems/product-of-array-except-self/description/
// Using prefix/suffix
//      Principal is to
export const productOfArrayExceptSelf = (nums) => {
	// Set prefix array (going left to right)
	const prefix = [1];

	// Set prefix product to 1 (0 would break it due to multiplication)
	let preProd = 1;

	// Loop through nums array (left to right)
	//      Start index at 1
	for (let i = 1; i < nums.length; i++) {
		// Reassign `preProd` to the multiple of the previous element
		preProd = preProd * nums[i - 1];

		// Add the new `preProd` value to `prefix`
		prefix.push(preProd);
	}

	// Set suffix array (going right to left)
	let suffix = [1];

	// Set suffix product to 1 (0 would break it due to multiplication)
	let suffProd = 1;

	// Loop through nums array (right to left)
	//      Start index at length - 1
	for (let i = nums.length - 1; i > 0; i--) {
		// Reassign `suffProd` to the multiple of the previous element
		suffProd = nums[i] * suffProd;

		// Add the new `suffProd` value to `suffix`
		suffix.push(suffProd);
	}

	// Reverse the order of `suffix`
	suffix = suffix.reverse();

	// Create `output` array to get the final answer
	const output = [];

	// Loop through prefix
	//      Could use suffix. They should both be the same length
	for (let i = 0; i < prefix.length; i++) {
		// Push to `output` the multiple of each element of prefix and suffix, in order
		output.push(prefix[i] * suffix[i]);
	}

	return output;
};

// // Using division
// export const productOfArrayExceptSelf = (nums) => {
// 	let prod = 1;
// 	let zeroed = 0;
// 	nums.forEach((el) => {
// 		if (el !== 0) {
// 			prod = prod * el;
// 		} else {
// 			zeroed++;
// 		}
// 	});

// 	if (zeroed > 1) {
// 		return new Array(nums.length).fill(0);
// 	}

// 	const output = [];
// 	nums.forEach((el) => {
// 		if (zeroed === 1 && el === 0) {
// 			output.push(prod);
// 		} else if (zeroed === 1 && el !== 0) {
// 			output.push(0);
// 		} else {
// 			output.push(prod / el);
// 		}
// 	});

// 	return output;
// };
