import { describe, test, expect } from "vitest";
import { validAnagram } from "../questions/242-valid-anagram";

describe("242 - Valid Anagram", () => {
    test("Case 1", () => {
        expect(validAnagram("racecar", "carrace")).toEqual(true)
    })
    
    test("Case 2", () => {
        expect(validAnagram("jar", "jam")).toEqual(false)
    })
})
        