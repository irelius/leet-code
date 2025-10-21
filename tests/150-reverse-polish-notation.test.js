import { describe, test, expect } from "vitest";
import { reversePolishNotation } from "../questions/150-reverse-polish-notation";

describe("150 - Reverse Polish Notation", () => {
	test("Case 1", () => {
		expect(reversePolishNotation(["2", "1", "+", "3", "*"])).toEqual(9);
	});

	test("Case 2", () => {
		expect(reversePolishNotation(["4", "13", "5", "/", "+"])).toEqual(6);
	});

	test("Case 3", () => {
		expect(reversePolishNotation(["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"])).toEqual(
			22
		);
	});
});
