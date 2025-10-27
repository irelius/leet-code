import { describe, test, expect } from "vitest";
import { longestRepeatingCharacterReplacement } from "../questions/424-longest-repeating-character-replacement";

describe("424 - Longest Repeating Character Replacement", () => {
	test("Case 1", () => {
		expect(longestRepeatingCharacterReplacement("ABAB", 2)).toEqual(4);
	});

	test("Case 2", () => {
		expect(longestRepeatingCharacterReplacement("AABABBA", 1)).toEqual(4);
	});

	test("Case 3", () => {
		expect(longestRepeatingCharacterReplacement("AABBB", 1)).toEqual(4);
	});

	test("Case 4", () => {
		expect(longestRepeatingCharacterReplacement("AABBBCB", 2)).toEqual(6);
	});

	test("Case 5", () => {
	    expect(longestRepeatingCharacterReplacement("ACABBB", 2)).toEqual(5)
	})
});
