export const twoSum = (nums, target) => {
    let map = {}
    for(let i = 0; i < nums.length; i++) {
        let curr = nums[i]

        if(curr in map) {
            return [map[curr], i]
        } else {
            map[target - curr] = i
        }
    }
}

// loop through array
// on an element, find difference from target
    // check if element is in the map
        // if element is in the map, then you know you've found a pair that adds to the target
    // if not in map, then add difference to map as key and value is index
        // ex: if curr is 2 and target is 9, difference is 7
    // then continue looping
        // ex: next element is 7 (go back to checking if element is in the map)
