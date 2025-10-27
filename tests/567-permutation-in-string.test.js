import { describe, test, expect } from "vitest";
import { permutationInString } from "../questions/567-permutation-in-string";

describe("567 - Permutation In String", () => {
    test("Case 1", () => {
        expect(permutationInString("ab", "eidbaooo")).toEqual(true)
    })
    
    test("Case 2", () => {
        expect(permutationInString("ab", "eidboaoo")).toEqual(false)
    })

    test("Case 3", () => {
        expect(permutationInString("abc", "lecaabee")).toEqual(false)
    })

    test("Case 4", () => {
        expect(permutationInString("adc", "dcda")).toEqual(true)
    })
})
        