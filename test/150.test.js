import { describe, expect, test } from "vitest";
import { reversePolishNotation } from "../150-evaluate-reverse-polish-notation/reversePolishNotation";

describe("150 - Evaluate Reverse Polish Notation", () => {
    test("Case 1", () => {
        expect(reversePolishNotation(["2", "1", "+", "3", "*"])).toBe(9)
    })

    test("Case 2", () => {
        expect(reversePolishNotation(["4", "13", "5", "/", "+"])).toBe(6)
    })

    test("Case 3", () => {
        expect(reversePolishNotation(["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"])).toBe(22)
    })
})
