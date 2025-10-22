export const containerWithMostWater = (height) => {
	// Set `max` variable to keep track of the largest area
	let max = 0;

	// Set left and right pointer variables
	//      left is 0, right is last element of array
	let l = 0;
	let r = height.length - 1;

	// While left pointer is less than right pointer
	while (l < r) {
		// Get the values at the left and right pointer indexes
		const left = height[l];
		const right = height[r];

		// Calculate the area
		//      Width is right pointer minus left pointer
		//      Height is the lower of the values at the left and right pointer
		const amount = (r - l) * Math.min(right, left);

		// Change `max` to be the larger of the two values
		max = Math.max(max, amount);

		// If the value of left is less than or equal to right, increase left pointer by 1
		if (left <= right) l++;
		// Otherwise, right value is less than left value, so reduce right pointer by 1
		else if (right < left) r--;
		// This is because the only way for a new window to have a higher area than before is to increase the height more than width
		//      Moving the value with the higher height will not do this
		//      You've just decreased the width and kept the lower height the same
	}

	// Return `max`
	return max;
};
