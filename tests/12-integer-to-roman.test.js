import { describe, expect, test } from "vitest";
import { intToRoman } from "../questions/12-integer-to-roman";

describe("12 - Integer to Roman", () => {
	test("Case 1", () => {
		expect(intToRoman(3749)).toBe("MMMDCCXLIX");
	});

	test("Case 2", () => {
		expect(intToRoman(58)).toBe("LVIII");
	});

	test("Case 3", () => {
		expect(intToRoman(1994)).toBe("MCMXCIV");
	});
});
