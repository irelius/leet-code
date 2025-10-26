// https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/description/

// Rules of this question:
//      Numbers are in ascending in order, but can be rotated
//      Only following rules are possible:
//          left < mid < right
//          left < mid > right
//          left > mid < right
//      Following rule is NOT possible:
//          left > mid > right

// Given the rules, where the minimum value follows strict rules:
//      left < mid < right:
//          min val is either left or to the left of mid (return left or move left; `r = m - 1`)
//      left < mid > right:
//          min val is to the right of mid (move right; `l = m + 1`)
//      left > mid < right:
//          min val is either mid or left of mid (either return mid or move left; `r = m - 1`)

// Similar behavior is dependant on relationship between mid and right
//      if mid < right...
//          if left < mid, then left is the min val
//          if left > mid, then min val is either mid or somewhere to the left
//      if mid > right, move right

// Solution 2b - binary search, lower bound
//      Because of `Math.floor`, `m` rounds down to the lower pointer
export const minimumRotatedSortedArray = (nums) => {
	// set up left and right pointer
	let l = 0;
	let r = nums.length - 1;

	// While left pointer < right pointer
	while (l < r) {
		// calculate mid pointer
		const m = l + Math.floor((r - l) / 2);

		// get values of mid and right pointers for easier reference
		const mid = nums[m];
		const right = nums[r];

		// if mid > right
		if (mid > right) {
			// then minimum must be to the right of mid point; move to right
			l = m + 1;
		}
		// Otherwise, mid < right (not <= because numbers are ascending/unique)
		else {
			// could be mid > left or mid < left, either case, move left
			//      if mid val is the minimum, then any future mid pointer vals will never be greater than the new right pointer val
			r = m;
		}
	}

	// Because of `Math.floor`, loop will continue and collect to the left pointer
	//      while loop stops because of `l < r`, so infinite loop will not occur if left and right pointer equal
	return nums[l];
};

// // Solution 2a - binary search, but cleaner
// export const minimumRotatedSortedArray = (nums) => {
// 	// set up left and right pointer
// 	let l = 0;
// 	let r = nums.length - 1;

// 	// set `min` variable to keep track of the minimum value of the array
// 	let min = Infinity;

// 	// while left pointer <= right pointer
// 	while (l <= r) {
// 		// set mid pointer
// 		const m = l + Math.floor((r - l) / 2);

// 		// get the values at the left, mid, and right pointers as variables for easier reference
// 		const left = nums[l];
// 		const mid = nums[m];
// 		const right = nums[r];

// 		// Update `min` to be the smaller value between what it was and current mid value
// 		//      Handles edge case where mid val happens to be the minimum value
// 		min = Math.min(min, mid);

// 		// if left value < right value
// 		//      By transitive property, mid val must be bigger than left val and less than right val
// 		//          Because numbers are in ascending order (albeit possibly rotated)
// 		if (left < right) {
// 			// Return the smaller value between the temporary min or left
// 			//      If mid val happened to be minimum value, then `min` was updated already above
// 			return Math.min(min, left);
// 		}

// 		// if mid val > right val
// 		if (mid > right) {
// 			// then minimum value must be to the right of mid point; move to right
// 			l = m + 1;
// 		}
// 		// Otherwise, mid < right (not <= because numbers are ascending/unique)
// 		else {
// 			// could be mid > left or mid < left, but in either case, move left
// 			//      Technically, mid val could be the minimum, but this edge case is handled above
// 			r = m - 1;
// 		}
// 	}

// 	return min;
// };

// // Solution 1 - messy, but it works and it is binary search
// export const minimumRotatedSortedArray = (nums) => {
// 	let l = 0;
// 	let r = nums.length - 1;

// 	let min = Infinity;

// 	while (l <= r) {
// 		const m = l + Math.floor((r - l) / 2);

// 		const left = nums[l];
// 		const mid = nums[m];
// 		const right = nums[r];

// 		if (left < mid && mid < right) {
// 			r = m - 1;
// 		} else if (left < mid && mid > right) {
// 			l = m + 1;
// 		} else if (left > mid && mid < right) {
// 			r = m - 1;
// 		} else {
// 			if (l === nums.length - 1) {
// 				r--;
// 			} else {
// 				l++;
// 			}
// 		}

// 		min = Math.min(min, mid);
// 	}

// 	return Math.min(min, nums[l]);
// };
