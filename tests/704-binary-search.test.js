import { describe, test, expect } from "vitest";
import { binarySearch } from "../questions/704-binary-search";

describe("704 - Binary Search", () => {
    test("Case 1", () => {
        expect(binarySearch([-1,0,3,5,9,12], 9)).toEqual(4)
    })
    
    test("Case 2", () => {
        expect(binarySearch([-1,0,3,5,9,12], 2)).toEqual(-1)
    })

    // test("Case 3", () => {
    //     expect(binarySearch()).toEqual()
    // })
})
        