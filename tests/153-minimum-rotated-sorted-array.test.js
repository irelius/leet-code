import { describe, test, expect } from "vitest";
import { minimumRotatedSortedArray } from "../questions/153-minimum-rotated-sorted-array";

describe("153 - Minimum Rotated Sorted Array", () => {
	test("Case 1", () => {
		expect(minimumRotatedSortedArray([3, 4, 5, 1, 2])).toEqual(1);
	});

	test("Case 2", () => {
		expect(minimumRotatedSortedArray([3, 4, 5, 6, 7, 1, 2])).toEqual(1);
	});

	test("Case 3", () => {
		expect(minimumRotatedSortedArray([11, 13, 15, 16, 17])).toEqual(11);
	});

	test("Case 4", () => {
		expect(minimumRotatedSortedArray([2, 3, 4, 5, 6, 7, 1])).toEqual(1);
	});

	test("Case 5", () => {
		expect(minimumRotatedSortedArray([7, 1, 2, 3, 4, 5, 6])).toEqual(1);
	});

	test("Case 6", () => {
		expect(minimumRotatedSortedArray([4, 5, 1, 2, 3])).toEqual(1);
	});

	// [1, 2, 3, 4, 5] - l < m < r; move left

	// [2, 3, 4, 5, 1] - l < m > r; move right
	// [3, 4, 5, 1, 2] - l < m > r; move right

	// [4, 5, 1, 2, 3] - l > m < r; move left
	// [5, 1, 2, 3, 4] - l > m < r; move left

	//
});
