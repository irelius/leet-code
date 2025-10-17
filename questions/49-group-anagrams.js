export const groupAnagrams = (strs) => {
    let ans = {}

    for (let i = 0; i < strs.length; i++) {
        let curr = strs[i]
        let sorted = curr.split("").sort().join("")
        if (!(sorted in ans)) {
            ans[sorted] = []
        }
        ans[sorted].push(curr)
    }

    return Object.values(ans)
}
