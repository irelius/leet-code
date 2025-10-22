export const carFleet = (target, position, speed) => {
	// If there's only 1 element in the position, there can only be 1 fleet
	if (position.length === 1) return 1;

	// Create an array of subarrays that has the position and speed of each car
	//      0: position
	//      1: speed
	const cars = position.map((el, i) => [el, speed[i]]);

	// Sort the `cars` array to be in descending order based on position of the cars
	//      This makes it easier to find if any cars in the back has a higher speed/pace to catch up to the front cars
	cars.sort((a, b) => b[0] - a[0]);

	// Create stack, `turnsLeft`,
	const turnsLeft = [];

	// Go through all the `cars`
	for (let i = 0; i < cars.length; i++) {
		// Destructure position and speed from the current car
		const [pos, spd] = [cars[i][0], cars[i][1]];

		// Calculate how many turns it would take the current car to get to the target
		//      Add to the `turnsLeft` stack
		//      Don't use `Math.ceil()`
		turnsLeft.push((target - pos) / spd);

		// Get the last `turnsLeft` from the stack
		const currTurnsLeft = turnsLeft[turnsLeft.length - 1];

		// Get the 2nd to last `turnsLeft` from the stack
		const prevTurnsLeft = turnsLeft[turnsLeft.length - 2];

		// If there are more than 1 `turnsLeft` in the stack, then we have at least 2 cars with different position/speeds
		// If the previous car has a higher `turnsLeft` than the current car
		if (turnsLeft.length >= 2 && prevTurnsLeft >= currTurnsLeft) {
			// Remove the current car's `turnsLeft` from the stack
			//      This is because the current car had a higher speed than the previous car and caught up, so it changes its lower `turnsLeft` to the target to the higher `turnsLeft`
			turnsLeft.pop();
		}
	}

	return turnsLeft.length;
};
