import { describe, expect, test } from "vitest";
import { groupAnagrams } from "../questions/49-group-anagrams/49";

describe("49 - Group Anagrams", () => {
    test("Case 1", () => {
        expect(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"])).toEqual([["bat"], ["nat", "tan"], ["ate", "eat", "tea"]])
    })

    test("Case 2", () => {
        expect(groupAnagrams([[""]])).toEqual([[""]])
    })

    test("Case 3", () => {
        expect(groupAnagrams([["a"]])).toEqual([["a"]])
    })
})
