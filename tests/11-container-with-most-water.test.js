import { describe, test, expect } from "vitest";
import { containerWithMostWater } from "../questions/11-container-with-most-water";

describe("11 - Container With Most Water", () => {
    test("Case 1", () => {
        expect(containerWithMostWater([1,8,6,2,5,4,8,3,7])).toEqual(49)
    })
    
    test("Case 2", () => {
        expect(containerWithMostWater([1,1])).toEqual(1)
    })
})
        