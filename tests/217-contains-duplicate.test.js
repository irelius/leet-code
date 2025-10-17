import { describe, expect, test } from "vitest";
import { containsDuplicate } from "../questions/217-contains-duplicate/217";

describe("217 - Contains Duplicate", () => {
    test("Case 1", () => {
        expect(containsDuplicate([1, 2, 3, 1])).toBe(true)
    })

    test("Case 2", () => {
        expect(containsDuplicate([1, 2, 3, 4])).toBe(false)
    })

    test("Case 3", () => {
        expect(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2])).toBe(true)
    })
})
