export const isPalindrome = function (s) {
    let alphabet = "abcdefghijklmnopqrstuvwxyz0123456789";
    let l = 0
    let r = s.length - 1
    while (l < r) {
        let left = s[l].toLowerCase()
        let right = s[r].toLowerCase()
        if (!alphabet.includes(left)) {
            l++
            continue
        } else if (!alphabet.includes(right)) {
            r--
            continue
        } else if (left !== right) {
            return false
        }
        l++
        r--
    }
    return true
};