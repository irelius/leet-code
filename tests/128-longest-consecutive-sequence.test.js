import { describe, test, expect } from "vitest";
import { longestConsecutiveSequence } from "../questions/128-longest-consecutive-sequence";

describe("128 - Longest Consecutive Sequence", () => {
	test("Case 1", () => {
		expect(longestConsecutiveSequence([100, 4, 200, 1, 3, 2])).toEqual(4);
	});

	test("Case 2", () => {
		expect(longestConsecutiveSequence([0, 3, 7, 2, 5, 8, 4, 6, 0, 1])).toEqual(9);
	});

	test("Case 3", () => {
		expect(longestConsecutiveSequence([1, 0, 1, 2])).toEqual(3);
	});

	test("Case 4", () => {
		expect(longestConsecutiveSequence([9, 1, -3, 2, 4, 8, 3, -1, 6, -2, -4, 7])).toEqual(4);
	});
});
