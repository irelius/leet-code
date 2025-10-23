// https://leetcode.com/problems/koko-eating-bananas/description/
export const kokoEatingBananas = (piles, h) => {
	// Set lower and upper bound
	//      which serves as the left and right pointer
	let lower = 1;
	// Upper is set to the max value of the piles
	//      This is because alloted time cannot be more than the amount of piles provided
	//      So finishing the biggest pile in an hour is the fastest pace needed to finish all the piles under `h` time
	//      A faster pace doesn't do anything, and koko wants to eat slowly
	let upper = Math.max(...piles);

	// Set a `min` to keep track of the slowest eating pace koko can have without exceeding alloted time
	//      Default to the max value of piles as that is the fastest needed pace by default to finish all the piles in time
	let min = upper;

	// While lower is <= upper
	while (lower <= upper) {
		// Calculate the mid point of the two bounds
		const eatingRate = lower + Math.floor((upper - lower) / 2);

		// Set temporary variable to keep track of the amount of time the current `eatingRate` needs to finish all the piles
		let timeToEat = 0;

		// Loop through all the piles
		for (let i = 0; i < piles.length; i++) {
			// Add to `timeToEat` the amount of time the current pile would take given the current `eatingRate` (rounded up)
			timeToEat += Math.ceil(piles[i] / eatingRate);

			// Not necessary, but if `timeToEat` exceeds alloted time given, exit the loop early
			if (timeToEat > h) break;
		}

		// If the time taken to eat the piles is greater than `h`
		if (timeToEat > h) {
			// Then `eatingRate` is too slow, increase the lower bound
			lower = eatingRate + 1;
		}
		// If the time taken to eat the piles is under `h` alloted time
		else if (timeToEat <= h) {
			// Set the new min to the `eatingRate`
			min = eatingRate;

			// But also check for a new `eatingRate` that still works but is slower, decrease the upper bound
			upper = eatingRate - 1;
		}
	}

	return min;
};
