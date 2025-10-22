import { describe, expect, test } from "vitest";
import { threeSum } from "../questions/15-3-sum";

describe("15 - 3 Sum", () => {
	test("Case 1", () => {
		expect(threeSum([-1, 0, 1, 2, -1, -4])).toEqual([
			[-1, -1, 2],
			[-1, 0, 1],
		]);
	});

	test("Case 2", () => {
		expect(threeSum([0, 1, 1])).toEqual([]);
	});

	test("Case 3", () => {
		expect(threeSum([0, 0, 0])).toEqual([[0, 0, 0]]);
	});

	test("Case 4", () => {
		expect(threeSum([3, 0, -2, -1, 1, 2])).toEqual([
			[-2, -1, 3],
			[-2, 0, 2],
			[-1, 0, 1],
		]);
	});
});
