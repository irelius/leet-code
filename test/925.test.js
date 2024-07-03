import { describe, expect, test } from "vitest";
import { longPressedName } from "../925-long-pressed-name/925";

describe("925 - Long Pressed Name", () => {
    test('Case 1', () => {
        expect(longPressedName("alex", "aaleex")).toBe(true)
    })
    test('Case 2', () => {
        expect(longPressedName("saeed", "ssaaedd")).toBe(false)
    })
    test('Case 3', () => {
        expect(longPressedName("leelee", "lleeelee")).toBe(true)
    })
})
