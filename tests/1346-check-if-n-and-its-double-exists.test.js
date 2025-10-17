import { describe, test, expect } from "vitest";
import { checkIfNAndItsDoubleExists } from "../questions/1346-check-if-n-and-its-double-exists/1346";

describe("1346 - Check If N and Its Double Exists", () => {
    test("Case 1", () => {
        expect(checkIfNAndItsDoubleExists([1, 4, 7, 8])).toBe(true)
    })

    test("Case 2", () => {
        expect(checkIfNAndItsDoubleExists([10, 2, 5, 3])).toBe(true)
    })

    test("Case 3", () => {
        expect(checkIfNAndItsDoubleExists([-766, 259, 203, 601, 896, -226, -844, 168, 126, -542, 159, -833, 950, -454, -253, 824, -395, 155, 94, 894, -766, -63, 836, -433, -780, 611, -907, 695, -395, -975, 256, 373, -971, -813, -154, -765, 691, 812, 617, -919, -616, -510, 608, 201, -138, -669, -764, -77, -658, 394, -506, -675, 523])).toBe(true)
    })

    test("Case 4", () => {
        expect(checkIfNAndItsDoubleExists([3, 1, 7, 11])).toBe(false)
    })
})
