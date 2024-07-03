import { describe, test, expect } from "vitest";
import { twoSum } from "../1-two-sum/1";

describe("1 - Two Sum", () => {
    test("Case 1", () => {
        expect(twoSum([2, 7, 11, 15], 9)).toEqual([0, 1])
    })

    test("Case 2", () => {
        expect(twoSum([3, 2, 4], 6)).toEqual([1, 2])
    })

    test("Case 3", () => {
        expect(twoSum([3, 3], 6)).toEqual([0, 1])
    })
})
