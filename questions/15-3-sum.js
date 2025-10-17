// // Not good solution, takes too long, but theoretically works?
// export const threeSum = function (nums) {
//     nums.sort((a, b) => a - b)
//     let triplets = []
//     let ref = new Set()

//     let holder = 0
//     let left = 1
//     let right = 2

//     while (right <= nums.length) {
//         let h = nums[holder]
//         let l = nums[left]
//         let r = nums[right]

//         let rLimit = nums.length - 1
//         let lLimit = rLimit - 1

//         if (h + l + r === 0) {
//             let newTriple = [h, l, r].join("")
//             if (!ref.has(newTriple)) {
//                 ref.add(newTriple)
//                 triplets.push([h, l, r])
//             }
//         }
//         if (left === lLimit && right === rLimit) {
//             holder++
//             left = holder + 1
//             right = holder + 2
//         } else if (right === rLimit) {
//             left++
//             right = left + 1
//         } else {
//             right++

//         }
//     }
//     return triplets
// };

export const threeSum = function (nums) {
    let hold = 0
    let left = 1
    let right = 2
    let triplets = []
    let ref = new Set()

    while (hold < nums.length - 2) {
        let h = nums[hold]
        let l = nums[left]
        let r = nums[right]

        if (h + l + r === 0) {
            let check = [h, l, r].join("")
            if (!ref.has(check)) {
                ref.add(check)
                triplets.push([h, l, r])
            }
        }
    }
}

console.log(threeSum([3, 0, -2, -1, 1, 2])) // [-2, -1, 0, 1, 2, 3]