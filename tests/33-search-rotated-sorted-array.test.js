import { describe, test, expect } from "vitest";
import { searchRotatedSortedArray } from "../questions/33-search-rotated-sorted-array";

describe("33 - Search Rotated Sorted Array", () => {
	test("Case 1a", () => {
		expect(searchRotatedSortedArray([4, 5, 6, 7, 0, 1, 2], 0)).toEqual(4);
	});

	test("Case 1b", () => {
		expect(searchRotatedSortedArray([4, 5, 6, 7, 0, 1, 2], 6)).toEqual(2);
	});

	// test("Case 2", () => {
	// 	expect(searchRotatedSortedArray([4, 5, 6, 7, 0, 1, 2], 3)).toEqual(-1);
	// });

	// test("Case 3", () => {
	// 	expect(searchRotatedSortedArray([1], 0)).toEqual(-1);
	// });

	// test("Case 4", () => {
	// 	expect(searchRotatedSortedArray([1], 1)).toEqual(0);
	// });

	// test("Case 5", () => {
	// 	expect(searchRotatedSortedArray([4, 5, 6, 0, 1, 2, 3], 6)).toEqual(2);
	// });

	// test("Case 6", () => {
	// 	expect(searchRotatedSortedArray([4, 5, 6, 7, 8, 1, 2, 3], 8)).toEqual(4);
	// });
});
