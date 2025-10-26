import { describe, test, expect } from "vitest";
import { bestTimeToBuySellStocks } from "../questions/121-best-time-to-buy-sell-stocks";

describe("121 - Best Time To Buy Sell Stocks", () => {
	test("Case 1", () => {
		expect(bestTimeToBuySellStocks([7, 1, 5, 3, 6, 4])).toEqual(5);
	});

	test("Case 2", () => {
		expect(bestTimeToBuySellStocks([7, 6, 4, 3, 1])).toEqual(0);
	});

	// test("Case 3", () => {
	//     expect(bestTimeToBuySellStocks()).toEqual()
	// })
});
