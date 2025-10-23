export const kokoEatingBananas = (piles, h) => {
	let lower = 1;
	let upper = Math.max(...piles);
    let min = upper

	while (lower <= upper) {
		const eatingRate = lower + Math.floor((upper - lower) / 2);

		let timeToEat = 0;

		for (let i = 0; i < piles.length; i++) {
			const currPile = piles[i];
			timeToEat += Math.ceil(currPile / eatingRate);
			if (timeToEat > h) break;
		}

		if (timeToEat > h) {
			lower = eatingRate + 1;
		} else if (timeToEat <= h) {
            min = eatingRate
			upper = eatingRate - 1;
		}
	}

	return min
};
