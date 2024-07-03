export const intersectionOfTwoArrays2 = (nums1, nums2) => {
    nums1.sort((a, b) => a - b)
    nums2.sort((a, b) => a - b)
    let output = []
    let pointer1 = 0
    let pointer2 = 0

    while (pointer1 < nums1.length && pointer2 < nums2.length) {
        if (nums1[pointer1] < nums2[pointer2]) {
            pointer1++
        } else if (nums1[pointer1] > nums2[pointer2]) {
            pointer2++
        } else {
            output.push(nums1[pointer1])
            pointer1++
            pointer2++
        }
    }

    return output
}
