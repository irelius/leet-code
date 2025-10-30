import { describe, test, expect } from "vitest";
import { findDuplicateNumber } from "../questions/287-find-duplicate-number";

describe("287 - Find Duplicate Number", () => {
    test("Case 1", () => {
        expect(findDuplicateNumber([1,3,4,2,2])).toEqual(2)
    })
    
    test("Case 2", () => {
        expect(findDuplicateNumber([3,1,3,4,2])).toEqual(3)
    })

    test("Case 3", () => {
        expect(findDuplicateNumber([3,3,3,3,3])).toEqual(3)
    })
})
        