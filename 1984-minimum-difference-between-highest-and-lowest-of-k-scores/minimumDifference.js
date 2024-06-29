var minimumDifference = function (nums, k) {
    let sorted = nums.sort((a, b) => a - b)

    let lowerBound = sorted[0]
    let upperBound = sorted[k - 1]
    let currMin = upperBound - lowerBound

    // // solution starting i at k; window looking backwards
    // for (let i = k; i < sorted.length; i++) {
    //     currMin = Math.min(currMin, sorted[i] - sorted[i - k + 1])
    // }

    // // solution starting at 1; window looking forward
    for (let i = 1; i <= sorted.length - k; i++) {
        currMin = Math.min(currMin, sorted[i + k - 1] - sorted[i])
    }
    return currMin


    // // alternative solution: pointer start and end, moving both by 1 each iteration
    // if(nums.length === 1) return 0

    // let difference = Infinity
    // nums.sort((a,b) => a - b)

    // let start = 0
    // let end = k - 1
    // while(end < nums.length) {
    //     difference = Math.min(difference, nums[end] - nums[start])
    //     start++
    //     end++
    // }

    // return difference
};
