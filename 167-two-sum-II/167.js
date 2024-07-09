export const twoSum = function (numbers, target) {
    let left = 0
    let right = numbers.length - 1
    while (left < right) {
        let l = numbers[left]
        let r = numbers[right]

        if (l + r === target) {
            return [left + 1, right + 1]
        } else if (l + r < target) {
            left++
        } else if (l + r > target) {
            right--
        }
    }
};