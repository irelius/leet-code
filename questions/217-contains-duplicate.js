export const containsDuplicate = function (nums) {
    let ref = new Set()
    for (let i = 0; i < nums.length; i++) {
        if (ref.has(nums[i])) {
            return true
        } else {
            ref.add(nums[i])
        }
    }
    return false
};