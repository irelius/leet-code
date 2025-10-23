import { describe, test, expect } from "vitest";
import { kokoEatingBananas } from "../questions/875-koko-eating-bananas";

describe("875 - Koko Eating Bananas", () => {
    test("Case 1", () => {
        expect(kokoEatingBananas([3,6,7,11], 8)).toEqual(4)
    })
    
    test("Case 2", () => {
        expect(kokoEatingBananas([30,11,23,4,20], 5)).toEqual(30)
    })

    test("Case 3", () => {
        expect(kokoEatingBananas([30,11,23,4,20], 6)).toEqual(23)
    })

    test("Case 4", () => {
        expect(kokoEatingBananas([1,4,3,2], 9)).toEqual(2)
    })
})
        