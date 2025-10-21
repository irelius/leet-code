import { describe, test, expect } from "vitest";
import { dailyTemperatures } from "../questions/739-daily-temperatures";

describe("739 - Daily Temperatures", () => {
	test("Case 1", () => {
		expect(dailyTemperatures([30, 38, 30, 36, 35, 40, 28])).toEqual([1, 4, 1, 2, 1, 0, 0]);
	});

	test("Case 2", () => {
		expect(dailyTemperatures([22, 21, 20])).toEqual([0, 0, 0]);
	});

	test("Case 3", () => {
		expect(dailyTemperatures([30, 60, 90])).toEqual([1, 1, 0]);
	});

	test("Case 4", () => {
		expect(dailyTemperatures([30, 40, 50, 60])).toEqual([1, 1, 1, 0]);
	});

	test("Case 5", () => {
		expect(dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73])).toEqual([1, 1, 4, 2, 1, 1, 0, 0]);
	});
});
