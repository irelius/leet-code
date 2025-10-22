import { describe, test, expect } from "vitest";
import { carFleet } from "../questions/853-car-fleet";

describe("853 - Car Fleet", () => {
	test("Case 1", () => {
		expect(carFleet(12, [10, 8, 0, 5, 3], [2, 4, 1, 1, 3])).toEqual(3);
	});

	test("Case 2", () => {
		expect(carFleet(10, [3], [3])).toEqual(1);
	});

	test("Case 3", () => {
		expect(carFleet(100, [0, 2, 4], [4, 2, 1])).toEqual(1);
	});

	test("Case 4", () => {
		expect(carFleet(10, [8, 3, 7, 4, 6, 5], [4, 4, 4, 4, 4, 4])).toEqual(6);
	});

	test("Case 5", () => {
		expect(carFleet(10, [0, 5, 3, 6], [1, 1, 2, 1])).toEqual(3);
	});
});
