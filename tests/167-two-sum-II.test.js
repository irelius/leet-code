import { describe, expect, test } from "vitest";
import { twoSum } from "../questions/167-two-sum-II/167";

describe("167 - Two Sum II - Input Array is Sorted", () => {
    test("Case 1", () => {
        expect(twoSum([2, 7, 11, 15], 9)).toEqual([1, 2])
    })

    test("Case 2", () => {
        expect(twoSum([2, 3, 4], 6)).toEqual([1, 3])
    })

    test("Case 3", () => {
        expect(twoSum([-1,0], -1)).toEqual([1, 2])
    })
})
