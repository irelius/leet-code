export const bestTimeToBuySellStocks = (prices) => {
	let l = 0;
	let r = 1;

	let profit = 0;
	while (r < prices.length) {
		const left = prices[l];
		const right = prices[r];

		if (left > right) {
			l = r;
		} else {
			profit = Math.max(profit, right - left);
		}
		r++;
	}

	return profit;
};
