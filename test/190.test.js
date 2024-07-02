import { describe, expect, test } from "vitest";
import { reverseBits } from "../190-reverse-bits/reverseBits";

describe("190 - Reverse Bits", () => {
    test("Case 1", () => {
        expect(reverseBits("00000010100101000001111010011100")).toBe(964176192)
    })

    test("Case 2", () => {
        expect(reverseBits('11111111111111111111111111111101')).toBe(3221225471)
    })
})
