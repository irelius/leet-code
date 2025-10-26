import { describe, test, expect } from "vitest";
import { longestSubstringWithoutRepeatingCharacters } from "../questions/3-longest-substring-without-repeating-characters";

describe("3 - Longest Substring Without Repeating Characters", () => {
	test("Case 1", () => {
		expect(longestSubstringWithoutRepeatingCharacters("abcabcbb")).toEqual(3);
	});

	test("Case 2", () => {
		expect(longestSubstringWithoutRepeatingCharacters("bbbbb")).toEqual(1);
	});

	test("Case 3", () => {
		expect(longestSubstringWithoutRepeatingCharacters("pwwkew")).toEqual(3);
	});

	test("Case 4", () => {
		expect(longestSubstringWithoutRepeatingCharacters("")).toEqual(0);
	});
});
