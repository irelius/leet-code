// https://leetcode.com/problems/find-the-difference-of-two-arrays/description/?envType=study-plan-v2&envId=leetcode-75
var findDifference = function (nums1, nums2) {
    let common = new Set() // sets have a new function called "difference", might be better
    let set1 = new Set(nums1)

    let output2 = new Set()
    for (let i = 0; i < nums2.length; i++) {
        if (set1.has(nums2[i])) {
            common.add(nums2[i])
        } else {
            output2.add(nums2[i])
        }
    }

    let output1 = new Set()
    for (let i = 0; i < nums1.length; i++) {
        if (!common.has(nums1[i])) {
            output1.add(nums1[i])
        }
    }

    return [Array.from(output1), Array.from(output2)]
};
