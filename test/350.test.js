import { describe, expect, test } from "vitest";
import { intersectionOfTwoArrays2 } from "../350-intersection-of-two-arrays-II/intersectionOfTwoArrays2";

describe("350 - Intersection of Two Arrays II", () => {
    test("Case 1", () => {
        expect(intersectionOfTwoArrays2([1, 2, 2, 1], [2, 2])).toEqual([2, 2])
    })
})
