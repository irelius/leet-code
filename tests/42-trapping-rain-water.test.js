import { describe, test, expect } from "vitest";
import { trappingRainWater } from "../questions/42-trapping-rain-water";

describe("42 - Trapping Rain Water", () => {
	test("Case 1", () => {
		expect(trappingRainWater([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1])).toEqual(6);
	});

	test("Case 2", () => {
		expect(trappingRainWater([4, 2, 0, 3, 2, 5])).toEqual(9);
	});

	// test("Case 3", () => {
	// 	expect(trappingRainWater()).toEqual();
	// });
});
