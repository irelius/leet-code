// https://leetcode.com/problems/top-k-frequent-elements/description/
export const topKFrequent = function (nums, k) {
    let answer = []

    let frequency = {}

    for (let i = 0; i < nums.length; i++) {
        let curr = nums[i]
        if (frequency[curr]) {
            frequency[curr]++
        } else {
            frequency[curr] = 1
        }
    }

    let bucket = []

    for (const key in frequency) {
        let val = frequency[key]
        if (bucket[val]) {
            bucket[val].push(key)
        } else {
            bucket[val] = [key]
        }
    }

    // for (let i = bucket.length - 1; i >= 0; i--) {
    //     let curr = bucket[i]
    //     while (answer.length < k && curr && curr.length > 0) {
    //         const item = curr.pop()
    //         if (item !== undefined) {
    //             answer.push(parseInt(item))
    //         }
    //     }
    //     if (answer.length === k) {
    //         return answer
    //     }
    // }


    for (let i = bucket.length - 1; i >= 0; i--) {
        let curr = bucket[i]
        if (curr === undefined) {
            continue
        }
        for (let j = 0; j < curr.length; j++) {
            answer.push(parseInt(curr[j]))
            if (answer.length === k) {
                return answer
            }
        }
    }

    return answer
};