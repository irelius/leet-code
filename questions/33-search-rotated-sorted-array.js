// https://neetcode.io/problems/find-target-in-rotated-sorted-array?list=neetcode150
// Reference 153-minimum-rotated-sorted-array for more notes

// Difference between 33 and 153 is that this has 1 more additional layer to consider
//      33 just needs to consider that the array is rotated
//      153 needs to consider that the array is rotated and its relation to the target number
//          33 defaults to finding the minimum value, 153 provides the value to look for

// l < m < r
//      if m < t
//          t must be to the right of m
//      if m > t
//          t must be to the left of m
// l < m > r
//      if m < t
//          t must be to the right of m
//      if m > t
//          t must be to the left of m
// l > m < r
//      if m < t
//          t must be to the right of m
//      if m > t
//          t must be to the left of m

export const searchRotatedSortedArray = (nums, target) => {
	let l = 0;
	let r = nums.length - 1;

	while (l <= r) {
		const m = l + Math.floor((r - l) / 2);

		const left = nums[l];
		const mid = nums[m];
		const right = nums[r];

		console.log(mid);

		if (mid === target) return m;

		
	}

	return -1;
};

// hot dam i cannot wrap my head around this one for some reason

// searchRotatedSortedArray([4, 5, 6, 7, 0, 1, 2], 0);

