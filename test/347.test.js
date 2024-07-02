import { describe, expect, test } from 'vitest'
import { topKFrequent } from "../347-top-k-frequent-elements/topKFrequentElements"

describe("347 - Top K Frequent Elements", () => {
    test('[1,1,1,2,2,3], 2 equals [1, 2]', () => {
        expect(topKFrequent([1, 1, 1, 2, 2, 3], 2)).toEqual([1, 2])
    })

    test('[1], 1 equals [1]', () => {
        expect(topKFrequent([1], 1)).toEqual([1])
    })
})
