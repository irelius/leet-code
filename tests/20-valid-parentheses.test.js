import { describe, test, expect } from "vitest";
import { validParentheses } from "../questions/20-valid-parentheses";

describe("20 - Valid Parentheses", () => {
    test("Case 1", () => {
        expect(validParentheses("[]")).toEqual(true)
    })
    
    test("Case 2", () => {
        expect(validParentheses("([{}])")).toEqual(true)
    })

    test("Case 3", () => {
        expect(validParentheses("(]")).toEqual(false)
    })

    test("Case 4", () => {
        expect(validParentheses("([)]")).toEqual(false)
    })

    test("Case 5", () => {
        expect(validParentheses("()[]{}")).toEqual(true)
    })
    
    test("Case 6", () => {
        expect(validParentheses("]")).toEqual(false)
    })
})
        