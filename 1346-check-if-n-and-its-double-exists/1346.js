export const checkIfNAndItsDoubleExists = function (arr) {
    // // solution 1: brute force
    // arr.sort((a, b) => a - b)
    // let left = 0
    // let right = 1

    // while (right < arr.length) {
    //     if (arr[left] < 0) {
    //         if (arr[left] / 2 === arr[right]) return true
    //         if (arr[left] / 2 > arr[right]) {
    //             right++
    //         } else if (arr[left] / 2 < arr[right]) {
    //             left++
    //             right = left + 1
    //         }
    //     }
    //     if(arr[left] >= 0) {
    //         if (arr[left] * 2 === arr[right]) return true
    //         if (arr[left] * 2 < arr[right]) {
    //             left++
    //             right = left + 1
    //         } else if (arr[left] * 2 > arr[right]) {
    //             right++
    //         }
    //     }
    // }

    // return false


    // // solution 2: hash map
    // let mult = {}

    // for (let i = 0; i < arr.length; i++) {
    //     const curr = arr[i]
    //     if(curr in mult) return true

    //     if(mult[curr * 2] === undefined) {
    //         mult[curr * 2] = true
    //     }
    //     if(mult[curr / 2] === undefined) {
    //         mult[curr / 2] = true
    //     }
    // }
    // return false


    // solution 3: time efficient, also using hash map
    const set = new Set()
    for (let i = 0; i < arr.length; i++) {
        const curr = arr[i]
        if (set.has(curr)) return true
        set.add(curr * 2)
        set.add(curr / 2)
    }
    return false
};
