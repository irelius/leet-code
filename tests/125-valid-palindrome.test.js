import { describe, expect, test } from "vitest";
import { isPalindrome } from "../questions/125-valid-palindrome/125";

describe("125 - Valid Palindrome", () => {
    test("Case 1", () => {
        expect(isPalindrome("A man, a plan, a canal: Panama")).toBe(true)
    })

    test("Case 2", () => {
        expect(isPalindrome("race a car")).toBe(false)
    })

    test("Case 3", () => {
        expect(isPalindrome(" ")).toBe(true)
    })

    test("Case 4", () => {
        expect(isPalindrome("0P")).toBe(false)
    })
})
